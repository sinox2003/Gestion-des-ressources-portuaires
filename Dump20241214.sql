-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: mysql-38f07ac7-mohaennouass-c7fc.a.aivencloud.com    Database: stage
-- ------------------------------------------------------
-- Server version	8.0.30

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '3b054c08-ba22-11ef-b97f-027e0ed19edf:1-15,
9da4159e-4d07-11ef-9454-ee6feb9cddc6:1-998,
aab43b01-0eae-11ef-8ddc-12ffd469482a:1-15,
b1463536-24a4-11ef-9f36-ce0918eaa392:1-15,
ee9ca4e6-bf7e-11ee-bc45-223ff05ba1e0:1-555';

--
-- Table structure for table `accessoires`
--

DROP TABLE IF EXISTS `accessoires`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accessoires` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accessoires`
--

LOCK TABLES `accessoires` WRITE;
/*!40000 ALTER TABLE `accessoires` DISABLE KEYS */;
INSERT INTO `accessoires` VALUES (1,'Palonier 50T'),(2,'Élingues à corde'),(3,'Élingues à câble'),(4,'Pinces à conteneurs'),(5,'Spreaders');
/*!40000 ALTER TABLE `accessoires` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `droits`
--

DROP TABLE IF EXISTS `droits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `droits` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `droits`
--

LOCK TABLES `droits` WRITE;
/*!40000 ALTER TABLE `droits` DISABLE KEYS */;
INSERT INTO `droits` VALUES (1,'Droit d\'avoir accès à tous les droits définis dans le système','Tous les droits'),(2,'Droit de gérer tous les utilisateurs du système','Utilisateurs du système'),(3,'Droit de créer le mode de travail','Mode de travail'),(4,'Droit de créer la période shift','Période shift'),(5,'Droit de gérer l\'équipe','Gestion d\'équipe'),(6,'Droit de créer le plan de roulement','Plan de roulement'),(7,'Droit de créer une main théorique','Main théorique'),(8,'Droit de gérer tous les utilisateurs du port','Utilisateurs du port');
/*!40000 ALTER TABLE `droits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipe`
--

DROP TABLE IF EXISTS `equipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipe` (
  `id` varchar(255) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `shift` enum('SHIFT_1','SHIFT_2','SHIFT_3') DEFAULT NULL,
  `responsable_matricule` varchar(255) DEFAULT NULL,
  `operation_marine_id` bigint DEFAULT NULL,
  `operation_manutention_id` bigint DEFAULT NULL,
  `operation_logistique_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKow8iebkmwntptr4lqhuv2xwwh` (`responsable_matricule`),
  KEY `FKarqmymifjc1sksdhl0w3kt470` (`operation_marine_id`),
  KEY `FK5trjptjtq36a9pedqglcy4u10` (`operation_manutention_id`),
  KEY `FK3iixucy6rbf0sl9rjbm3t7l8j` (`operation_logistique_id`),
  CONSTRAINT `FK3iixucy6rbf0sl9rjbm3t7l8j` FOREIGN KEY (`operation_logistique_id`) REFERENCES `operation_logistique` (`id`),
  CONSTRAINT `FK5trjptjtq36a9pedqglcy4u10` FOREIGN KEY (`operation_manutention_id`) REFERENCES `operation_manutention` (`id`),
  CONSTRAINT `FKarqmymifjc1sksdhl0w3kt470` FOREIGN KEY (`operation_marine_id`) REFERENCES `operation_marine` (`id`),
  CONSTRAINT `FKtanmfgl3mg56j5lwftwca6aqw` FOREIGN KEY (`responsable_matricule`) REFERENCES `personnel` (`matricule`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipe`
--

LOCK TABLES `equipe` WRITE;
/*!40000 ALTER TABLE `equipe` DISABLE KEYS */;
INSERT INTO `equipe` VALUES ('equipe_1111','equipe 1',NULL,'Omar_3984',NULL,1,NULL),('equipe_1221','equipe 1','SHIFT_1','Ahmed_4562',NULL,2,NULL);
/*!40000 ALTER TABLE `equipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipements`
--

DROP TABLE IF EXISTS `equipements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipements` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `type_equipement_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKr2odamd6tuetik7qubcqa1pgg` (`type_equipement_id`),
  CONSTRAINT `FKr2odamd6tuetik7qubcqa1pgg` FOREIGN KEY (`type_equipement_id`) REFERENCES `type_equipement` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipements`
--

LOCK TABLES `equipements` WRITE;
/*!40000 ALTER TABLE `equipements` DISABLE KEYS */;
INSERT INTO `equipements` VALUES (1,'Grue 1',1),(2,'Grue 2',1),(3,'Grue 3',1),(4,'Elévateur 1',2),(5,'Elévateur 2',2),(6,'Elévateur 3',2),(7,'Remorque 1',3),(8,'Remorque 2',3),(9,'Remorque 3',3),(10,'Vedette 1',4),(11,'Vedette 2',4),(12,'Vedette 3',4),(13,'Remorqueur 1',5),(14,'Remorqueur 2',5),(15,'Remorqueur 3',5),(16,'Reachstackers 1',6),(17,'Reachstackers 2',6),(18,'Reachstackers 3',6),(19,'Chariots 1',7),(20,'Chariots 2',7),(21,'Chariots 3',7),(22,'Tracteurs 1',8),(23,'Tracteurs 2',8),(24,'Tracteurs 3',8),(25,'Chargeuses 1',9),(26,'Chargeuses 2',9),(27,'Chargeuses 3',9),(28,'Portiques 1',10),(29,'Portiques 2',10),(30,'Portiques 3',10);
/*!40000 ALTER TABLE `equipements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fonctions`
--

DROP TABLE IF EXISTS `fonctions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fonctions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK8ouyjabnsmu9erh3nu3vkgwbl` (`nom`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fonctions`
--

LOCK TABLES `fonctions` WRITE;
/*!40000 ALTER TABLE `fonctions` DISABLE KEYS */;
INSERT INTO `fonctions` VALUES (1,'CE'),(2,'CEQ'),(3,'CER'),(7,'Grutier'),(5,'Marin'),(6,'Matelot'),(4,'Pilote');
/*!40000 ALTER TABLE `fonctions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_theorique_manutention`
--

DROP TABLE IF EXISTS `main_theorique_manutention`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_theorique_manutention` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `prestation_id` bigint DEFAULT NULL,
  `ressources_materielles_id` bigint DEFAULT NULL,
  `trafic_id` bigint DEFAULT NULL,
  `type_trafic_id` bigint DEFAULT NULL,
  `operation_manutention_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKat28hhtj81r7y8wloa2eemfc9` (`ressources_materielles_id`),
  KEY `FK7kvy6pg1a2wk4wlx54wmvafey` (`prestation_id`),
  KEY `FKel0aonjktikh36aue70dja88h` (`trafic_id`),
  KEY `FKi2ql4xo9qwsivhfaqq56vvj6f` (`type_trafic_id`),
  KEY `FKipp0v0km8p61jcvd8u0lw6u1g` (`operation_manutention_id`),
  CONSTRAINT `FK7kvy6pg1a2wk4wlx54wmvafey` FOREIGN KEY (`prestation_id`) REFERENCES `prestation` (`id`),
  CONSTRAINT `FKel0aonjktikh36aue70dja88h` FOREIGN KEY (`trafic_id`) REFERENCES `trafic` (`id`),
  CONSTRAINT `FKi2ql4xo9qwsivhfaqq56vvj6f` FOREIGN KEY (`type_trafic_id`) REFERENCES `type_trafic` (`id`),
  CONSTRAINT `FKij2jn5xfi3y9vnwvd50nbfo6v` FOREIGN KEY (`ressources_materielles_id`) REFERENCES `parametrage_ressources_materielles` (`id`),
  CONSTRAINT `FKipp0v0km8p61jcvd8u0lw6u1g` FOREIGN KEY (`operation_manutention_id`) REFERENCES `operation_manutention` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_theorique_manutention`
--

LOCK TABLES `main_theorique_manutention` WRITE;
/*!40000 ALTER TABLE `main_theorique_manutention` DISABLE KEYS */;
INSERT INTO `main_theorique_manutention` VALUES (1,'main 1',1,1,2,1,3),(2,'main 2',1,3,5,2,3),(3,'main 1',2,4,2,1,1),(4,'main 1',1,6,5,2,2);
/*!40000 ALTER TABLE `main_theorique_manutention` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_theorique_marine`
--

DROP TABLE IF EXISTS `main_theorique_marine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_theorique_marine` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `navire_id` bigint DEFAULT NULL,
  `prestation_id` bigint DEFAULT NULL,
  `ressources_materielles_id` bigint DEFAULT NULL,
  `operation_marine_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKo7onmv4th8lh7tuivto56rkfc` (`ressources_materielles_id`),
  KEY `FK70nidt7c3i1kekhj2328k2nd6` (`navire_id`),
  KEY `FKr1qyoiu7wcook9asfagjqlh4g` (`prestation_id`),
  KEY `FKsroa0bpwi3ly13pjthasnpgd3` (`operation_marine_id`),
  CONSTRAINT `FK70nidt7c3i1kekhj2328k2nd6` FOREIGN KEY (`navire_id`) REFERENCES `navires` (`id`),
  CONSTRAINT `FKn0xkwr0iguqldrnxuvfkim36u` FOREIGN KEY (`ressources_materielles_id`) REFERENCES `parametrage_ressources_materielles` (`id`),
  CONSTRAINT `FKr1qyoiu7wcook9asfagjqlh4g` FOREIGN KEY (`prestation_id`) REFERENCES `prestation` (`id`),
  CONSTRAINT `FKsroa0bpwi3ly13pjthasnpgd3` FOREIGN KEY (`operation_marine_id`) REFERENCES `operation_marine` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_theorique_marine`
--

LOCK TABLES `main_theorique_marine` WRITE;
/*!40000 ALTER TABLE `main_theorique_marine` DISABLE KEYS */;
INSERT INTO `main_theorique_marine` VALUES (1,'main 1',1,3,2,3),(2,'main 1',1,3,5,1);
/*!40000 ALTER TABLE `main_theorique_marine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mode_travail`
--

DROP TABLE IF EXISTS `mode_travail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mode_travail` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `jour` tinyint DEFAULT NULL,
  `semaine` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mode_travail`
--

LOCK TABLES `mode_travail` WRITE;
/*!40000 ALTER TABLE `mode_travail` DISABLE KEYS */;
INSERT INTO `mode_travail` VALUES (1,1,0),(2,0,0);
/*!40000 ALTER TABLE `mode_travail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `navires`
--

DROP TABLE IF EXISTS `navires`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `navires` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `navires`
--

LOCK TABLES `navires` WRITE;
/*!40000 ALTER TABLE `navires` DISABLE KEYS */;
INSERT INTO `navires` VALUES (1,'Navire 1'),(2,'Navire 2'),(3,'Navire 3');
/*!40000 ALTER TABLE `navires` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `norme_productivite`
--

DROP TABLE IF EXISTS `norme_productivite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `norme_productivite` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mode` varchar(255) DEFAULT NULL,
  `nature_suivi` varchar(255) DEFAULT NULL,
  `norme` bigint DEFAULT NULL,
  `sens_export` bit(1) NOT NULL,
  `sens_import` bit(1) NOT NULL,
  `main_theorique_id` bigint DEFAULT NULL,
  `trafic_id` bigint DEFAULT NULL,
  `operation_manutention_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKt7uolpfcg2s6k2m6u62fmyp1d` (`main_theorique_id`),
  KEY `FKllhslegx43axipdwrp8sdhg1c` (`trafic_id`),
  KEY `FKkhrqb6f07a7s7wdewyl0o7pky` (`operation_manutention_id`),
  CONSTRAINT `FKkhrqb6f07a7s7wdewyl0o7pky` FOREIGN KEY (`operation_manutention_id`) REFERENCES `operation_manutention` (`id`),
  CONSTRAINT `FKllhslegx43axipdwrp8sdhg1c` FOREIGN KEY (`trafic_id`) REFERENCES `trafic` (`id`),
  CONSTRAINT `FKt7uolpfcg2s6k2m6u62fmyp1d` FOREIGN KEY (`main_theorique_id`) REFERENCES `main_theorique_manutention` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `norme_productivite`
--

LOCK TABLES `norme_productivite` WRITE;
/*!40000 ALTER TABLE `norme_productivite` DISABLE KEYS */;
INSERT INTO `norme_productivite` VALUES (4,'T/M','Shift',1800,_binary '',_binary '',3,1,1),(5,'T/M/Shift','Shift',2311,_binary '',_binary '',4,5,2);
/*!40000 ALTER TABLE `norme_productivite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operation_logistique`
--

DROP TABLE IF EXISTS `operation_logistique`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operation_logistique` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mode_travail_id` bigint DEFAULT NULL,
  `period_shift_id` bigint DEFAULT NULL,
  `plan_roulement_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKsax0kcebktswen0vs56gkx88d` (`mode_travail_id`),
  UNIQUE KEY `UKquigq4oti7vwf6fgarlqro021` (`period_shift_id`),
  UNIQUE KEY `UKq7na3yscojhjcb8uyh0sngi78` (`plan_roulement_id`),
  CONSTRAINT `FK5lx2g4qjuayjons27i04qh104` FOREIGN KEY (`plan_roulement_id`) REFERENCES `plan_roulement` (`id`),
  CONSTRAINT `FKcdesqaediopd68umgyfolufmv` FOREIGN KEY (`mode_travail_id`) REFERENCES `mode_travail` (`id`),
  CONSTRAINT `FKf90lnhre3utgup5twff9nvcxe` FOREIGN KEY (`period_shift_id`) REFERENCES `period_shift` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operation_logistique`
--

LOCK TABLES `operation_logistique` WRITE;
/*!40000 ALTER TABLE `operation_logistique` DISABLE KEYS */;
INSERT INTO `operation_logistique` VALUES (1,NULL,NULL,NULL),(2,NULL,NULL,NULL),(3,NULL,NULL,NULL),(4,NULL,NULL,NULL);
/*!40000 ALTER TABLE `operation_logistique` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operation_manutention`
--

DROP TABLE IF EXISTS `operation_manutention`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operation_manutention` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mode_travail_id` bigint DEFAULT NULL,
  `period_shift_id` bigint DEFAULT NULL,
  `plan_roulement_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKbddg1bmhc8e1kd9w9abwsnigm` (`mode_travail_id`),
  UNIQUE KEY `UKd8956105stb24joqsed8evmyn` (`period_shift_id`),
  UNIQUE KEY `UKcjd7rr9xt8btmkcs1ot8qfl6g` (`plan_roulement_id`),
  CONSTRAINT `FKg9ny8t1mu54tj6yhvkc0t8ie3` FOREIGN KEY (`mode_travail_id`) REFERENCES `mode_travail` (`id`),
  CONSTRAINT `FKhej1f1dr2bqgd3oipugj17qgs` FOREIGN KEY (`period_shift_id`) REFERENCES `period_shift` (`id`),
  CONSTRAINT `FKj5dq6cjotsua8epmoueeymk85` FOREIGN KEY (`plan_roulement_id`) REFERENCES `plan_roulement` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operation_manutention`
--

LOCK TABLES `operation_manutention` WRITE;
/*!40000 ALTER TABLE `operation_manutention` DISABLE KEYS */;
INSERT INTO `operation_manutention` VALUES (1,1,1,1),(2,2,2,2),(3,NULL,NULL,NULL),(4,NULL,NULL,NULL);
/*!40000 ALTER TABLE `operation_manutention` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operation_marine`
--

DROP TABLE IF EXISTS `operation_marine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operation_marine` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mode_travail_id` bigint DEFAULT NULL,
  `period_shift_id` bigint DEFAULT NULL,
  `plan_roulement_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKmd4pn9vxtn9smn72su9n3rjeg` (`mode_travail_id`),
  UNIQUE KEY `UKj7qja0xmwx7optw4xs1ktlaq7` (`period_shift_id`),
  UNIQUE KEY `UKej8b2q9tegggune79rxe1p09l` (`plan_roulement_id`),
  CONSTRAINT `FK61m34wti655f52mesh1vgsfqn` FOREIGN KEY (`period_shift_id`) REFERENCES `period_shift` (`id`),
  CONSTRAINT `FKb9lrfsh4jxqeoa6rsi1w0wgr4` FOREIGN KEY (`mode_travail_id`) REFERENCES `mode_travail` (`id`),
  CONSTRAINT `FKeih478bkpu7ne2oyr6hq7eg50` FOREIGN KEY (`plan_roulement_id`) REFERENCES `plan_roulement` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operation_marine`
--

LOCK TABLES `operation_marine` WRITE;
/*!40000 ALTER TABLE `operation_marine` DISABLE KEYS */;
INSERT INTO `operation_marine` VALUES (1,NULL,NULL,NULL),(2,NULL,NULL,NULL),(3,NULL,NULL,NULL),(4,NULL,NULL,NULL);
/*!40000 ALTER TABLE `operation_marine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parametrage_ressources_humaines`
--

DROP TABLE IF EXISTS `parametrage_ressources_humaines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parametrage_ressources_humaines` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `arriere` bigint DEFAULT NULL,
  `bord` bigint DEFAULT NULL,
  `maximum` bigint DEFAULT NULL,
  `maximum_obligatoire` bit(1) NOT NULL,
  `quai` bigint DEFAULT NULL,
  `totale` bigint NOT NULL,
  `fonction_id` bigint NOT NULL,
  `main_theorique_marine_id` bigint DEFAULT NULL,
  `main_theorique_manutention_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKdlbrxkiav6v7px3pbn5daoi8t` (`fonction_id`),
  KEY `FKnvrba6h1gavjvgei1o4q0hst9` (`main_theorique_marine_id`),
  KEY `FKlaly7pvutlb7m4qg5qddl7l6e` (`main_theorique_manutention_id`),
  CONSTRAINT `FKdlbrxkiav6v7px3pbn5daoi8t` FOREIGN KEY (`fonction_id`) REFERENCES `fonctions` (`id`),
  CONSTRAINT `FKlaly7pvutlb7m4qg5qddl7l6e` FOREIGN KEY (`main_theorique_manutention_id`) REFERENCES `main_theorique_manutention` (`id`),
  CONSTRAINT `FKnvrba6h1gavjvgei1o4q0hst9` FOREIGN KEY (`main_theorique_marine_id`) REFERENCES `main_theorique_marine` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parametrage_ressources_humaines`
--

LOCK TABLES `parametrage_ressources_humaines` WRITE;
/*!40000 ALTER TABLE `parametrage_ressources_humaines` DISABLE KEYS */;
INSERT INTO `parametrage_ressources_humaines` VALUES (1,1,1,NULL,_binary '\0',1,3,1,NULL,1),(2,1,2,NULL,_binary '\0',1,4,2,NULL,1),(3,NULL,NULL,NULL,_binary '\0',NULL,3,1,1,NULL),(4,NULL,NULL,NULL,_binary '\0',NULL,2,7,1,NULL),(5,0,1,NULL,_binary '\0',1,2,1,NULL,2),(6,1,2,NULL,_binary '\0',2,5,2,NULL,3),(7,NULL,NULL,NULL,_binary '\0',NULL,4,1,2,NULL),(8,1,1,NULL,_binary '\0',2,4,3,NULL,4),(9,1,2,NULL,_binary '\0',2,5,7,NULL,4);
/*!40000 ALTER TABLE `parametrage_ressources_humaines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parametrage_ressources_materielles`
--

DROP TABLE IF EXISTS `parametrage_ressources_materielles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parametrage_ressources_materielles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parametrage_ressources_materielles`
--

LOCK TABLES `parametrage_ressources_materielles` WRITE;
/*!40000 ALTER TABLE `parametrage_ressources_materielles` DISABLE KEYS */;
INSERT INTO `parametrage_ressources_materielles` VALUES (1),(2),(3),(4),(5),(6);
/*!40000 ALTER TABLE `parametrage_ressources_materielles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parametrage_ressources_materielles_accessoire`
--

DROP TABLE IF EXISTS `parametrage_ressources_materielles_accessoire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parametrage_ressources_materielles_accessoire` (
  `ressources_materielles_id` bigint NOT NULL,
  `accessoire_id` bigint NOT NULL,
  PRIMARY KEY (`ressources_materielles_id`,`accessoire_id`),
  KEY `FKji2t673du4n79c5plxb7jdohf` (`accessoire_id`),
  CONSTRAINT `FK4cji40rhfbio9ub48q4kbrjsd` FOREIGN KEY (`ressources_materielles_id`) REFERENCES `parametrage_ressources_materielles` (`id`),
  CONSTRAINT `FKji2t673du4n79c5plxb7jdohf` FOREIGN KEY (`accessoire_id`) REFERENCES `accessoires` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parametrage_ressources_materielles_accessoire`
--

LOCK TABLES `parametrage_ressources_materielles_accessoire` WRITE;
/*!40000 ALTER TABLE `parametrage_ressources_materielles_accessoire` DISABLE KEYS */;
INSERT INTO `parametrage_ressources_materielles_accessoire` VALUES (1,1),(3,1),(4,1),(6,1),(1,3),(4,3),(6,3);
/*!40000 ALTER TABLE `parametrage_ressources_materielles_accessoire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parametrage_ressources_materielles_equipement`
--

DROP TABLE IF EXISTS `parametrage_ressources_materielles_equipement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parametrage_ressources_materielles_equipement` (
  `ressources_materielles_id` bigint NOT NULL,
  `equipement_id` bigint NOT NULL,
  PRIMARY KEY (`ressources_materielles_id`,`equipement_id`),
  KEY `FKp4s839jnin0gqn6p7ku5t6xtj` (`equipement_id`),
  CONSTRAINT `FKp4s839jnin0gqn6p7ku5t6xtj` FOREIGN KEY (`equipement_id`) REFERENCES `equipements` (`id`),
  CONSTRAINT `FKqnk2tu3iydiujcbltpvw1sitd` FOREIGN KEY (`ressources_materielles_id`) REFERENCES `parametrage_ressources_materielles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parametrage_ressources_materielles_equipement`
--

LOCK TABLES `parametrage_ressources_materielles_equipement` WRITE;
/*!40000 ALTER TABLE `parametrage_ressources_materielles_equipement` DISABLE KEYS */;
INSERT INTO `parametrage_ressources_materielles_equipement` VALUES (1,1),(2,1),(4,1),(1,2),(4,2),(3,4),(5,4),(6,4),(3,5),(6,5),(5,8),(1,10),(2,20),(6,25),(6,26);
/*!40000 ALTER TABLE `parametrage_ressources_materielles_equipement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `period_shift`
--

DROP TABLE IF EXISTS `period_shift`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `period_shift` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ramadan_end_date` date DEFAULT NULL,
  `ramadan_start_date` date DEFAULT NULL,
  `start_normal_period` time(6) NOT NULL,
  `start_ramadan_period` time(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `period_shift`
--

LOCK TABLES `period_shift` WRITE;
/*!40000 ALTER TABLE `period_shift` DISABLE KEYS */;
INSERT INTO `period_shift` VALUES (1,'2024-09-30','2024-09-01','19:50:00.000000','19:50:00.000000'),(2,'2024-10-04','2024-09-04','22:52:00.000000','12:52:00.000000');
/*!40000 ALTER TABLE `period_shift` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personnel`
--

DROP TABLE IF EXISTS `personnel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personnel` (
  `matricule` varchar(255) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `fonction_id` bigint DEFAULT NULL,
  `terminal_id` bigint DEFAULT NULL,
  `equipe_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`matricule`),
  KEY `FKca10g9wb6v0j11uyjfcxubm1x` (`fonction_id`),
  KEY `FKr2qgw0rk68ld01fownt66ptl9` (`terminal_id`),
  KEY `FK8gxh6yti79fjwj885bjhdl0w1` (`equipe_id`),
  CONSTRAINT `FK8gxh6yti79fjwj885bjhdl0w1` FOREIGN KEY (`equipe_id`) REFERENCES `equipe` (`id`),
  CONSTRAINT `FKca10g9wb6v0j11uyjfcxubm1x` FOREIGN KEY (`fonction_id`) REFERENCES `fonctions` (`id`),
  CONSTRAINT `FKr2qgw0rk68ld01fownt66ptl9` FOREIGN KEY (`terminal_id`) REFERENCES `terminaux` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personnel`
--

LOCK TABLES `personnel` WRITE;
/*!40000 ALTER TABLE `personnel` DISABLE KEYS */;
INSERT INTO `personnel` VALUES ('Abdelali_7891','Ouazzani','Abdelali',5,4,NULL),('Abdellah_8902','Kettani','Abdellah',6,2,NULL),('Adil_2426','Maalmi','Adil',5,4,NULL),('Ahmed_4562','Benjelloun','Ahmed',2,2,NULL),('Ali_3236','Charkaoui','Ali',2,4,NULL),('Amine_2517','Dahbi','Amine',4,2,NULL),('Amine_3459','El Haouari','Amine',4,3,NULL),('Anas_5421','Chafik','Anas',4,4,NULL),('Anass_7842','Tahiri','Anass',5,2,NULL),('Ayoub_1234','Dahbi','Ayoub',3,2,'equipe_1221'),('Aziz_8922','Laghrib','Aziz',2,3,NULL),('Aziz_9943','Bennis','Aziz',4,1,NULL),('Badr_3412','El Gharbi','Badr',1,1,NULL),('Badr_8843','El Jaziri','Badr',5,1,'equipe_1111'),('Farid_5591','Khattabi','Farid',4,1,NULL),('Farid_7864','Zahraoui','Farid',6,3,NULL),('Hamid_2208','Azami','Hamid',3,1,'equipe_1111'),('Hamid_4482','Zaidi','Hamid',6,1,NULL),('Hamza_2120','Marnissi','Hamza',7,4,NULL),('Hamza_7320','Touhami','Hamza',1,4,NULL),('Hassan_2349','El Fassi','Hassan',4,4,NULL),('Hassan_3345','Aouad','Hassan',4,2,NULL),('Hicham_2310','Benchekroun','Hicham',5,2,NULL),('Hicham_4318','Belkadi','Hicham',3,4,NULL),('Houssam_3241','Cherkaoui','Houssam',1,3,NULL),('Imad_9874','El Moutawakel','Imad',5,1,'equipe_1111'),('Imane_4092','Fakhouri','Imane',7,4,NULL),('Jalal_1543','Kadiri','Jalal',6,2,NULL),('Kamal_8930','Filali','Kamal',1,4,NULL),('Karim_1124','Amrani','Karim',3,2,NULL),('Karim_9872','Lakhdar','Karim',2,2,NULL),('Khalid_1594','Sbaï','Khalid',7,1,NULL),('Khalil_7784','El Mourabit','Khalil',6,4,NULL),('Mehdi_5721','Zerouali','Mehdi',6,4,NULL),('Mehdi_6612','Ouzzani','Mehdi',6,2,NULL),('Mohamed_3012','Gharbi','Mohamed',2,1,NULL),('Mohamed_7843','Bennani','Mohamed',3,3,NULL),('Mourad_6673','Semlali','Mourad',2,2,NULL),('Mourad_9987','Boussaid','Mourad',3,2,NULL),('Mustapha_5678','Zahidi','Mustapha',4,3,NULL),('Mustapha_6783','Chraibi','Mustapha',1,4,NULL),('Nabil_2145','Tazi','Nabil',2,1,NULL),('Nabil_3351','El Ouafi','Nabil',4,3,NULL),('Nasser_7896','Berrah','Nasser',2,4,NULL),('Noureddine_2351','Sefiani','Noureddine',7,3,NULL),('Omar_1298','Hajjami','Omar',3,4,NULL),('Omar_3984','El Bakkali','Omar',1,1,NULL),('Othmane_7123','Alaoui','Othmane',3,1,'equipe_1111'),('Rachid_5671','Tazi','Rachid',5,1,NULL),('Rachid_7775','Essalmi','Rachid',3,3,NULL),('Rayan_6543','Ezzine','Rayan',6,3,NULL),('Reda_9945','Fassi','Reda',1,3,NULL),('Saad_9012','Sekkat','Saad',2,1,NULL),('Said_6693','El Ghorfi','Said',5,3,NULL),('Saïd_8781','Benali','Saïd',4,4,NULL),('Salim_2345','Benhaddou','Salim',1,2,'equipe_1221'),('Samir_3333','Bouzid','Samir',1,1,NULL),('Samir_4367','Hajji','Samir',5,3,NULL),('Tariq_5679','Lamrini','Tariq',7,1,NULL),('Yahya_3456','Abouzaid','Yahya',2,3,NULL),('Yassine_2207','Mahmoudi','Yassine',7,2,'equipe_1221'),('Yassine_2211','Essaidi','Yassine',3,3,NULL),('Yassine_3410','Lahlou','Yassine',7,3,NULL),('Younes_6074','Moutawakkil','Younes',1,2,NULL),('Youssef_3457','Filali','Youssef',7,3,NULL),('Youssef_4560','El Idrissi','Youssef',7,2,NULL),('Zakaria_9013','Amraoui','Zakaria',6,1,NULL);
/*!40000 ALTER TABLE `personnel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plan_roulement`
--

DROP TABLE IF EXISTS `plan_roulement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan_roulement` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `end_date` date DEFAULT NULL,
  `plan` tinyint DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plan_roulement`
--

LOCK TABLES `plan_roulement` WRITE;
/*!40000 ALTER TABLE `plan_roulement` DISABLE KEYS */;
INSERT INTO `plan_roulement` VALUES (1,'2024-09-30',0,'2024-09-04'),(2,'2024-09-11',0,'2024-09-10');
/*!40000 ALTER TABLE `plan_roulement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ports`
--

DROP TABLE IF EXISTS `ports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ports` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ports`
--

LOCK TABLES `ports` WRITE;
/*!40000 ALTER TABLE `ports` DISABLE KEYS */;
INSERT INTO `ports` VALUES (1,'casablanca'),(2,'mohammedia');
/*!40000 ALTER TABLE `ports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ports_terminals`
--

DROP TABLE IF EXISTS `ports_terminals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ports_terminals` (
  `port_id` bigint NOT NULL,
  `terminals_id` bigint NOT NULL,
  PRIMARY KEY (`port_id`,`terminals_id`),
  UNIQUE KEY `UKit01o5d301wt2k65t4wo2y0wt` (`terminals_id`),
  CONSTRAINT `FK1lij5rr8oiaq97r0pfbwk181x` FOREIGN KEY (`port_id`) REFERENCES `ports` (`id`),
  CONSTRAINT `FKeyfoe4ktf9hy9w6ej9bu4lfdh` FOREIGN KEY (`terminals_id`) REFERENCES `terminaux` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ports_terminals`
--

LOCK TABLES `ports_terminals` WRITE;
/*!40000 ALTER TABLE `ports_terminals` DISABLE KEYS */;
INSERT INTO `ports_terminals` VALUES (1,1),(1,2),(2,3),(2,4);
/*!40000 ALTER TABLE `ports_terminals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prestation`
--

DROP TABLE IF EXISTS `prestation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prestation` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `type` enum('Manutention','Marine') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prestation`
--

LOCK TABLES `prestation` WRITE;
/*!40000 ALTER TABLE `prestation` DISABLE KEYS */;
INSERT INTO `prestation` VALUES (1,'Manutention','Manutention'),(2,'Marine','Manutention'),(3,'Pilotage','Marine'),(4,'Lamanage','Marine'),(5,'Remorquage','Marine'),(6,'Déhalage','Marine');
/*!40000 ALTER TABLE `prestation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile_droit`
--

DROP TABLE IF EXISTS `profile_droit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile_droit` (
  `profile_id` bigint NOT NULL,
  `droit_id` bigint NOT NULL,
  PRIMARY KEY (`profile_id`,`droit_id`),
  KEY `FKk7g295nl9kmvevabyvssr1nyo` (`droit_id`),
  CONSTRAINT `FK43tm2odwag8f7c9vvolkrjh1q` FOREIGN KEY (`profile_id`) REFERENCES `profiles` (`id`),
  CONSTRAINT `FKk7g295nl9kmvevabyvssr1nyo` FOREIGN KEY (`droit_id`) REFERENCES `droits` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile_droit`
--

LOCK TABLES `profile_droit` WRITE;
/*!40000 ALTER TABLE `profile_droit` DISABLE KEYS */;
INSERT INTO `profile_droit` VALUES (1,1),(2,8);
/*!40000 ALTER TABLE `profile_droit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profiles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nom` enum('ADMIN_PORT','CONSULTANT_COMPTES','RESPONSABLE_PREVISION','RESPONSABLE_REALISATION','RESPONSABLE_VALIDATION','SUPER_ADMIN') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES (1,'SUPER_ADMIN'),(2,'ADMIN_PORT'),(3,'RESPONSABLE_PREVISION'),(4,'RESPONSABLE_REALISATION'),(5,'CONSULTANT_COMPTES'),(6,'RESPONSABLE_VALIDATION');
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `terminaux`
--

DROP TABLE IF EXISTS `terminaux`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `terminaux` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `operation_logistique_id` bigint DEFAULT NULL,
  `operation_manutention_id` bigint DEFAULT NULL,
  `operation_marine_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKtea2r8n90j6nerhvo7812wyy7` (`operation_logistique_id`),
  UNIQUE KEY `UKlmhvdqpqkx13cpkl7jqqmvink` (`operation_manutention_id`),
  UNIQUE KEY `UK99ctqdbadffmuq9w6vnnteayl` (`operation_marine_id`),
  CONSTRAINT `FK64ogd6d1pqymj9x792rtlfdof` FOREIGN KEY (`operation_logistique_id`) REFERENCES `operation_logistique` (`id`),
  CONSTRAINT `FK8spciug2belefqnbwsr2rcras` FOREIGN KEY (`operation_marine_id`) REFERENCES `operation_marine` (`id`),
  CONSTRAINT `FK9kpfa10i126x6imw6och45jar` FOREIGN KEY (`operation_manutention_id`) REFERENCES `operation_manutention` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `terminaux`
--

LOCK TABLES `terminaux` WRITE;
/*!40000 ALTER TABLE `terminaux` DISABLE KEYS */;
INSERT INTO `terminaux` VALUES (1,'conteneurs 1',1,1,1),(2,'conteneurs 2',2,2,2),(3,'pétrolier',3,3,3),(4,'conteneurs 1',4,4,4);
/*!40000 ALTER TABLE `terminaux` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trafic`
--

DROP TABLE IF EXISTS `trafic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trafic` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `typre_trafic_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK9dv4cg0ppr7y7p3xvvvwniwrn` (`typre_trafic_id`),
  CONSTRAINT `FK9dv4cg0ppr7y7p3xvvvwniwrn` FOREIGN KEY (`typre_trafic_id`) REFERENCES `type_trafic` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trafic`
--

LOCK TABLES `trafic` WRITE;
/*!40000 ALTER TABLE `trafic` DISABLE KEYS */;
INSERT INTO `trafic` VALUES (1,'Pallette',1),(2,'Bib Bag',1),(3,'Machines industrielles',1),(4,'Produits alimentaires',1),(5,'Phosphates',2),(6,'Produits chimiques liquides',2),(7,'Charbon',2),(8,'Céréales',2),(9,'Conteneurs standards 20 pieds',3),(10,'Conteneurs réfrigérés',3),(11,'Conteneurs standards 40 pieds',3),(12,'Conteneurs à usage spécifique',3);
/*!40000 ALTER TABLE `trafic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_equipement`
--

DROP TABLE IF EXISTS `type_equipement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_equipement` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_equipement`
--

LOCK TABLES `type_equipement` WRITE;
/*!40000 ALTER TABLE `type_equipement` DISABLE KEYS */;
INSERT INTO `type_equipement` VALUES (1,'Grue'),(2,'Elévateur'),(3,'Remorque'),(4,'Vedette'),(5,'Remorqueur'),(6,'reachstackers'),(7,'chariots'),(8,'tracteurs'),(9,'chargeuses'),(10,'portiques');
/*!40000 ALTER TABLE `type_equipement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_equipement_trafic`
--

DROP TABLE IF EXISTS `type_equipement_trafic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_equipement_trafic` (
  `type_equipement` bigint NOT NULL,
  `trafic` bigint NOT NULL,
  PRIMARY KEY (`type_equipement`,`trafic`),
  KEY `FK37f86moy75o4u7bpqgs4hd9vd` (`trafic`),
  CONSTRAINT `FK37f86moy75o4u7bpqgs4hd9vd` FOREIGN KEY (`trafic`) REFERENCES `trafic` (`id`),
  CONSTRAINT `FKjthj3v1k0bog0frurh90a1wy0` FOREIGN KEY (`type_equipement`) REFERENCES `type_equipement` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_equipement_trafic`
--

LOCK TABLES `type_equipement_trafic` WRITE;
/*!40000 ALTER TABLE `type_equipement_trafic` DISABLE KEYS */;
INSERT INTO `type_equipement_trafic` VALUES (1,1),(4,1),(7,1),(1,2),(4,2),(1,3),(1,4),(4,4),(7,4),(2,5),(5,5),(9,5),(2,6),(5,6),(2,7),(5,7),(9,7),(2,8),(9,8),(3,9),(6,9),(8,9),(10,9),(3,10),(8,10),(10,10),(3,11),(6,11),(8,11),(10,11),(3,12),(5,12),(10,12);
/*!40000 ALTER TABLE `type_equipement_trafic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_trafic`
--

DROP TABLE IF EXISTS `type_trafic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_trafic` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_trafic`
--

LOCK TABLES `type_trafic` WRITE;
/*!40000 ALTER TABLE `type_trafic` DISABLE KEYS */;
INSERT INTO `type_trafic` VALUES (1,'Sacherie et divers'),(2,'Vrac'),(3,'Conteneur');
/*!40000 ALTER TABLE `type_trafic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profiles`
--

DROP TABLE IF EXISTS `user_profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_profiles` (
  `user_id` varchar(255) NOT NULL,
  `profile_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`profile_id`),
  KEY `FKd6tsq30eqvjqfo42065irbigt` (`profile_id`),
  CONSTRAINT `FKd6tsq30eqvjqfo42065irbigt` FOREIGN KEY (`profile_id`) REFERENCES `profiles` (`id`),
  CONSTRAINT `FKjcad5nfve11khsnpwj1mv8frj` FOREIGN KEY (`user_id`) REFERENCES `users` (`matricule`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profiles`
--

LOCK TABLES `user_profiles` WRITE;
/*!40000 ALTER TABLE `user_profiles` DISABLE KEYS */;
INSERT INTO `user_profiles` VALUES ('super_admin',1),('admin_casablanca',2),('admin_mohammedia',2),('super_admin',2);
/*!40000 ALTER TABLE `user_profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `matricule` varchar(255) NOT NULL,
  `mdp` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `port_id` bigint DEFAULT NULL,
  PRIMARY KEY (`matricule`),
  KEY `FKiygb41nw6r96edwmbs3q8cf9h` (`port_id`),
  CONSTRAINT `FKiygb41nw6r96edwmbs3q8cf9h` FOREIGN KEY (`port_id`) REFERENCES `ports` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('admin_casablanca','$2a$10$G9AZUO6jd5JH8swsVUG/vOK6qBPC7BGhmihaBZ6tFCsltkjN5xmr2','said','mohaaid',1),('admin_mohammedia','$2a$10$ji0TBLhpT5LfspHmO7NYQe9qhZ62BYt9jX9N7beMxjP/qFKa.VIDi','hassan','ayoubi',2),('super_admin','$2a$10$oE.d2rM6lAtgjNgwQyMBcOEYnfkuR1WhujkL9r5E9bFIVjnF5t0XW','ennouass','mohamed',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-14 16:01:10
