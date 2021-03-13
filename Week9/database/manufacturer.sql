CREATE TABLE manufacturer (
	manufacturer_id SERIAL PRIMARY KEY,
	name VARCHAR(32) NOT NULL,
	street1 VARCHAR(32) NOT NULL,
	street2 VARCHAR(32),
	city VARCHAR(32) NOT NULL,
	state VARCHAR(32) NOT NULL,
	zip_code VARCHAR(32) NOT NULL,
	product_id INTEGER,
	FOREIGN KEY (product_id) REFERENCES product (product_id) ON DELETE CASCADE
);