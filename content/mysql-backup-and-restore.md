# MySQL backup and restore

backup:

	$ mysqldump --all-databases > backup.sql

restore:

	$ mysql < backup.sql
