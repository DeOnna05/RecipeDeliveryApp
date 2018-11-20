USE Recipe_Delivery;
-- Creates products table --
CREATE TABLE users (
	
    firstName VARCHAR (30),
    lastName VARCHAR (30),
    userName VARCHAR (30),
    password VARCHAR (30),
  recipe_name VARCHAR (30) NOT NULL,
  ingredients VARCHAR (3000),
  price INTEGER,
  PRIMARY KEY(id)
  );