CREATE TABLE person (
	person_id SERIAL PRIMARY KEY,
	first_name VARCHAR(32) NOT NULL,
	middle_name VARCHAR(32),
	last_name VARCHAR(32) NOT NULL
);