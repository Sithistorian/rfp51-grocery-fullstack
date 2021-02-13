/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/

 CREATE DATABASE IF NOT EXISTS groceryList;

 USE groceryList;


CREATE TABLE IF NOT EXISTS list (
  id INT AUTO_INCREMENT PRIMARY KEY,
  item VARCHAR(200),
  quantity INT
);