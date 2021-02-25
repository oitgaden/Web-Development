CREATE TABLE product (
	product_id SERIAL PRIMARY KEY,
	name VARCHAR(32) NOT NULL,
	price money,
	count INTEGER
);