-- MySQL dump 10.13  Distrib 5.7.13, for Linux (i686)
--
-- Host: localhost    Database: techRacers_DB
-- ------------------------------------------------------
-- Server version	5.7.13-0ubuntu0.16.04.2

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
-- Table structure for table `myCompany`
--

DROP TABLE IF EXISTS `myCompany`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `myCompany` (
  `idmyCompany` int(11) NOT NULL AUTO_INCREMENT,
  `projects` varchar(255) DEFAULT NULL,
  `developers` varchar(255) DEFAULT NULL,
  `managers` varchar(255) DEFAULT NULL,
  `superAdmin` varchar(255) DEFAULT NULL,
  `users` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idmyCompany`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `myCompany`
--

LOCK TABLES `myCompany` WRITE;
/*!40000 ALTER TABLE `myCompany` DISABLE KEYS */;
INSERT INTO `myCompany` VALUES (1,'Project_1','user_1,user_2','user_3','user_5','user_1,user_2,user_3,user_5'),(2,'Project_2','user_4,user_3','user_2,user_1',NULL,'user_1,user_2,user_3,user_4'),(3,'Project_3','user_3','user_4,user_2',NULL,'user_2,user_3,user_4'),(4,'Project_4','user_6,user_2,user_4','user_1',NULL,'user_1,user_2,user_4,user_6'),(5,'Project_5','user_3','user_2,user_4',NULL,'user_2,user_3,user_4');
/*!40000 ALTER TABLE `myCompany` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-09-13 23:45:11
