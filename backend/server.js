const express = require("express");
const cors = require("cors");
const app = express();
const { portNumber, db } = require("./conf");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//

app.listen(portNumber, () => {
  console.log(`API root available at: http://localhost:${portNumber}/`);
});
