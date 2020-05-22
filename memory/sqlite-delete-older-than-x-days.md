# SQLite delete older than x days

	DELETE FROM table WHERE column <= datetime('now', '-2 day')
