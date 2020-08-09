# VPS backup

	$ rsync --dry-run -azvh --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} server:/ /usr/local/backup/server
