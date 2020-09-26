# PostgreSQL create table

	CREATE TABLE [IF NOT EXISTS] users (
		id INT PRIMARY KEY NOT NULL,
		username TEXT UNIQUE NOT NULL,
		password TEXT NOT NULL,
		created_at TIMESTAMP,
		updated_at TIMESTAMP
	);
