# PostgreSQL access console

	$ sudo -u postgres psql
# PostgreSQL add column

	ALTER TABLE "products" ADD COLUMN new_col TEXT;
# PostgreSQL check if row exists

	SELECT EXISTS(SELECT 1 FROM items WHERE item_id = 12);
# PostgreSQL connect to database

	user=# \c dbname
# PostgreSQL create database

	CREATE DATABASE "project";
# PostgreSQL create table

	CREATE TABLE [IF NOT EXISTS] users (
		id INT PRIMARY KEY NOT NULL,
		username TEXT UNIQUE NOT NULL,
		password TEXT NOT NULL,
		created_at TIMESTAMP,
		updated_at TIMESTAMP
	);
# PostgreSQL date column type

	CREATE TABLE products (
		id INT PRIMARY KEY NOT NULL,
		created_at DATE
	);
# PostgreSQL drop column

	ALTER TABLE "products" DROP COLUMN old_col;
# PostgreSQL drop database

	DROP DATABASE "project";
# PostgreSQL drop table

	DROP TABLE "products";
# PostgreSQL exit console

	user=# \q
# PostgreSQL get connection info

	user=# \conninfo
# PostgreSQL list databases

	user=# \l
# PostgreSQL list tables

	dbname=# \dt
# PostgreSQL rename column

	ALTER TABLE "products" RENAME COLUMN username TO notusername;
# PostgreSQL rename database

	ALTER DATABASE "product" RENAME TO "product2";
# PostgreSQL rename table

	ALTER TABLE "products" RENAME TO "products2";
# PostgreSQL run .sql file

	dbname=# \i schema.sql
# PostgreSQL timestamp column type

	CREATE TABLE products (
		id INT PRIMARY KEY NOT NULL,
		created_at TIMESTAMP
	);
# PostgreSQL view table schema

	dbname=# \d products
