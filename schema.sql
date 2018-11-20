-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS Recipe_Delivery;
-- Creates the "blogger" database --
CREATE DATABASE Recipe_Delivery;
-- Selects Bamazon Database --
USE Recipe_Delivery;
-- Creates products table --
CREATE TABLE recipes (
  recipe_name VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  description VARCHAR,
  ingredients VARCHAR,
  directions VARCHAR,
  image STRING,
  price INTEGER,
  PRIMARY KEY(id)
  );