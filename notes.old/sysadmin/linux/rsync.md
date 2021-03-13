# Rsync dry run
	$ rsync -nv file [user@]host:dest
# Rsync exclude
	$ rsync -a --exclude=/dir/.git dir [user@]host:dest
# VPS backup
	$ rsync --dry-run -azvh --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} server:/ /usr/local/backup/server
