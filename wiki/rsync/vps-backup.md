# VPS backup

	$ rsync --dry-run server:/ -aAXvh --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} /backup/server/main
