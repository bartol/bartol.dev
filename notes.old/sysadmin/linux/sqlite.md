# SQLite add table column

	ALTER TABLE products ADD COLUMN new_col TEXT;
# SQLite autoincrement row

	CREATE TABLE users (
		id INTEGER PRIMARY KEY
	);
# SQLite create table

	CREATE TABLE [IF NOT EXISTS] users (
		id INTEGER PRIMARY KEY,
		username TEXT UNIQUE,
		password TEXT,
		created_at TEXT,
		updated_at TEXT
	);
# SQLite create table with foreign key

	CREATE TABLE user (
		userid INTEGER,
		username TEXT
	);

	CREATE TABLE post (
		postid INTEGER PRIMARY KEY,
		postcontent TEXT
		postowner INTEGER,
		FOREIGN KEY(postowner) REFERENCES user(userid)
	);
# SQLite databases diff

	$ sqldiff database1.sqlite database2.sqlite
# SQLite database tables diff

	$ sqldiff --table TABLE database1.sqlite database2.sqlite
# SQLite delete older than x days

	DELETE FROM table WHERE column <= datetime('now', '-2 day')
# SQLite insert current date

	INSERT INTO users (name,created_at) VALUES ("bdeak",DATE('NOW'));
# SQLite insert current time

	INSERT INTO users (name,created_at) VALUES ("bdeak",DATETIME('NOW'));
# SQLite list tables

	sqlite> .tables
# SQLite rename table

	ALTER TABLE products RENAME TO products2;
# SQLite run .sql file

	sqlite> .read init.sql

or

	$ sqlite3 data.sqlite < init.sql
# SQLite sort rows

	SELECT * FROM users ORDER BY created_at DESC;
# SQLite unique row

	CREATE TABLE users (
		username TEXT UNIQUE
	);

# SQLite update row

	UPDATE table SET column = "value", column2 = "value2" WHERE id = ?;
# SQLite view table schema

	sqlite> .schema products
