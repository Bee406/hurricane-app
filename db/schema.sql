CREATE DATABASE safeCheck_db;
USE safeCheck_db;

CREATE TABLE `checkIns` (
  `id` INT(11) AUTO_INCREMENT NOT NULL,
  `first_name` VARCHAR( 255) NOT NULL,
  `last_name` VARCHAR( 255) NOT NULL,
  `email` VARCHAR( 255),
  `phone_number` INT(11) NOT NULL,
  `location` VARCHAR( 255 ) NOT NULL,
  `intended_destination` VARCHAR( 255 ),
  `comments` VARCHAR(1000),
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);
