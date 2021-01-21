

move to linux.md

# Copy directory from network with rsync

	$ rsync -a [user@]host:dir dest
# Copy directory over network with rsync

	$ rsync -a dir [user@]host:dest
# Copy file from network with rsync

	$ rsync [user@]host:file dest
# Copy file over network with rsync

	$ rsync file [user@]host:dest
# Delete files deleted in source

	rsync -r --delete out/ srv1:/home/www-data/www.bdeak.net
# Rsync compress

	$ rsync -z file [user@]host:dest

or

	$ rsync -az dir [user@]host:dest
# Rsync dry run

	$ rsync -nv file [user@]host:dest

or

	$ rsync -nva dir [user@]host:dest
# Rsync exclude

	$ rsync -a --exclude=/dir/.git dir [user@]host:dest
# VPS backup

	$ rsync --dry-run -azvh --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} server:/ /usr/local/backup/server
