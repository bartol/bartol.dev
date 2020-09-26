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
