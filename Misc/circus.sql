-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: circus
-- ------------------------------------------------------
-- Server version	5.7.26-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `content`
--

LOCK TABLES `content` WRITE;
/*!40000 ALTER TABLE `content` DISABLE KEYS */;
INSERT INTO `content` VALUES (1,'Jonglage','La jonglerie, souvent appelée jonglage ou encore jongle1, est un exercice d\'adresse qui consiste dans son sens le plus strict à lancer, rattraper et relancer de manière continue des objets en l’air. Elle peut être un jeu, un sport2, un art ou encore un rite religieux. L’acception que l’on donne au mot peut varier selon les pays ou les pratiquants, prenant en compte la seule manipulation d’objets ou l’ensemble du spectacle que l’artiste donne. De ce fait on en donne souvent une définition plus large qui inclut toutes les manipulations d’objets demandant de l’entraînement. La part artistique de la jonglerie pouvant être importante, l’expression corporelle et le côté théâtral comptent souvent autant que la performance pure. ','http://www.gandinijuggling.com/files/media_file_130.jpg','2019-07-16'),(2,'Acrobaties','Une acrobatie est un mouvement spectaculaire, difficile à réaliser (qui peut demander de la force, de l’équilibre, de l’agilité, de la souplesse…), comme des saltos.\n\nElles sont exécutées lors de spectacles (acrobates de cirque, clowns ou arts de rue) ou dans le sport (gymnastique particulièrement) ou certaines danses. À la différence des gymnastes qui utilisent un praticable pour effectuer leurs acrobaties, les acrobates les exécutent sur tous types de sols (herbe, béton, trampoline, etc.) ou dans les airs. ','https://www.ouest-france.fr/sites/default/files/styles/image-640x360/public/2013/09/28/acrobaties-magie-et-video-ce-soir-la-breche.jpg?itok=WTev_JYe','2019-07-17'),(3,'Domptage','Le domptage au sens strict se rapporte à la présentation de fauves, en particulier de grands félins (lions, tigres, panthères, etc.), généralement présentés dans une cage métallique pour des raisons de sécurité. Quelquefois, d\'autres animaux participent à ces numéros : hyènes, ours, loups et même chiens. Les groupes d\'animaux se composent en général de deux à dix individus, d\'une ou plusieurs espèces, mais certains cirques ont pu présenter jusqu\'à plusieurs dizaines d\'animaux ensemble. ','http://www.circusesandsideshows.com/images/fredlogantop_5.jpg','2019-07-18');
/*!40000 ALTER TABLE `content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `social`
--

LOCK TABLES `social` WRITE;
/*!40000 ALTER TABLE `social` DISABLE KEYS */;
INSERT INTO `social` VALUES (1,2,1,'2019-07-16'),(8,2,2,'2019-07-16'),(17,2,3,'2019-07-17'),(18,2,2,'2019-07-17'),(19,1,2,'2019-07-17'),(23,1,3,'2019-07-17');
/*!40000 ALTER TABLE `social` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Bobby',1),(2,'Mini Bobby',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-17 15:49:52
