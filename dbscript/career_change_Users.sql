-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: career_change
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `profile_photo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES ('13a53abe-42be-42db-82d3-06768f54383c','daf','asdf','adsf@gas.com','7418529632','$2a$12$1aMwscJ403hUA/I9hUxb/ebOjKUcLFVcUPv6Mw5cKMgZ5KCJB.n6i','user','asdf',NULL,'2020-11-01 22:18:34','2020-11-01 22:18:34'),('1e57450d-6c06-4bcc-af14-19d07a138561','David A','Backham A','davidb@gmail.com','9256541523','$2a$12$QB8w3MP5OB5SsgUB90yc8e8wx1iGR3rSF5UFRks3cqogT7qljj7Qy','user','davidc',NULL,'2020-11-01 22:12:52','2020-11-01 22:12:52'),('398dd3a5-378b-4b14-9c1a-951855b7e1ce','David','Backham','david@gmail.com','9256541523','$2a$12$8HLhTkQWojNHoJcQbgaHa.ck40u/oXU1kq0rN7mUPv8y03ww9QSDG','user','davidb',NULL,'2020-11-01 22:10:23','2020-11-01 22:10:23'),('73c54fcb-bfc5-46fb-a8f7-39b72b4844c2','mehade','hasan','mehade.hasan@hotmail.com','3452346655','$2a$12$PS2OcBe58KuZ5iqv0pKb1uop6gMw6nTrNTKCv6HG7scAx0vMfxkKK','admin','mehadehasan','avatar.png','2020-10-30 14:52:10','2020-10-30 14:52:10'),('7f65ab65-1e3d-4564-a5af-eceff83bbe5f','David A','Backham A','davida@gmail.com','9256541523','$2a$12$9PYCGfoAeCC2aJuybonQkuXJjoP.vOEmjT9PlFCHSOJ1swUxaCzEu','user','davida',NULL,'2020-11-01 22:12:25','2020-11-01 22:12:25'),('c9d77876-e3bf-4aac-a268-f97448e9bef5','David A','Backham A','davidbc@gmail.com','9256541523','$2a$12$N/ctOucCHqUQVCRP2HqDdOXv4HpM/3mEe6Wh9HmxhoGr/.FBPcL72','user','davidcc',NULL,'2020-11-01 22:14:11','2020-11-01 22:14:11'),('cf328c31-7e97-42da-ac0f-3813511f9b3b','Dav','Nom','dav@nom.com','5415236587','$2a$12$HXJahWaUPXSLyygPzJzJ8OmENQaI1jmtlGK0XWLPcyT4y0nFSZCBS','user','davnom',NULL,'2020-11-01 22:17:41','2020-11-01 22:17:41'),('d3ca671a-b602-47c3-a287-1d5bba03217a','Avinoam','Kellner','avi.kel@gmail.com','2227778765','$2a$12$uckWzpMh8hHYTAdfBUqtbuCbWnGNB99QBfHXgE8OTIZowQWvmTVsa','user','avikel',NULL,'2020-11-03 19:39:18','2020-11-03 19:39:18'),('f29143dc-203c-4059-8ab6-7c62273fd36b','avi','kellner','avi.kel9345@gmail.com','3452346655','$2a$12$PVxmrfBKYN8jOcMXEAOcfurhIrEOhYxbYeyF7cEEjUbc9FSMcbd3u','user','avi99kel','avatar.png','2020-11-05 18:35:29','2020-11-05 18:35:29'),('fa37a348-fcd2-4e7a-aebc-306de93955d6','sadf','adsf','df@ga.com','1234567896','$2a$12$a674J3SBFoJHEmM6l8ULdOg8qbz8cjKpqmL8WGms1p1eBn7KOKIJC','user','dasf',NULL,'2020-11-01 22:31:49','2020-11-01 22:31:49');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-05 13:52:03
