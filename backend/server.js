const express = require("express");
const cors = require("cors");
const app = express();
const { portNumber, db } = require("./conf");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get activities list

app.get("/activities/", (req, res) => {
  db.query(
    `SELECT id, title, content, image, created_at FROM content ORDER BY created_at DESC`,
    (err, rows) => {
      if (err) {
        console.log(err);
        return res.status(500).send("error when getting pictures route");
      }
      if (!rows) {
        return res.status(404).send("No activities found");
      }
      res.status(200).send(rows);
    }
  );
});

// Get favs on cards

app.get("/likes/:idAuthor", (req, res) => {
  const authorId = req.params.idAuthor;
  db.query(
    `SELECT id_content FROM social WHERE id_user = ${authorId}`,
    (err, rows) => {
      if (err) {
        console.log(err);
        return res.status(500).send("error when getting favs route");
      }
      if (!rows) {
        return res.status(404).send("No favs found");
      }
      let likesArray = rows.map(row => {
        return row.id_content;
      });
      res.status(200).send(likesArray);
    }
  );
});

// Like a performance

app.post("/like/:idActivity", (req, res) => {
  const activityId = req.params.idActivity;
  const authorId = req.body.idAuthor;
  db.query(
    `INSERT INTO social (id_user, id_content, created_at) VALUES (${authorId}, ${activityId}, NOW())`,
    (err, rows) => {
      if (err) {
        return res.status(500).send("error when posting like route");
      }
      res.status(200).send(rows);
    }
  );
});

// De-like a performance

app.put("/like/:idActivity", (req, res) => {
  const activityId = req.params.idActivity;
  const authorId = req.body.idAuthor;
  db.query(
    `DELETE FROM social WHERE id_user=${authorId}  AND id_content=${activityId}`,
    (err, rows) => {
      if (err) {
        return res.status(500).send("error when deleting like route");
      }
      res.status(200).send(rows);
    }
  );
});

// Get favs list

app.get("/favs/:idAuthor", (req, res) => {
  const authorId = req.params.idAuthor;
  db.query(
    `SELECT title, content, image FROM content INNER JOIN social on id_content = content.id AND id_user=${authorId};
    `,
    (err, rows) => {
      if (err) {
        console.log(err);
        return res.status(500).send("error when getting favs route");
      }
      if (!rows) {
        return res.status(404).send("No favs found");
      }
      res.status(200).send(rows);
    }
  );
});

app.listen(portNumber, () => {
  console.log(`API root available at: http://localhost:${portNumber}/`);
});
