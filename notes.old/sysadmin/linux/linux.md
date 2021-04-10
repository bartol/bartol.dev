# Linux

# Get Github latest release

	$ curl -fsSLI -o /dev/null -w %{url_effective} https://github.com/hadolint/hadolint/releases/latest && echo

[source](https://gist.github.com/lukechilds/a83e1d7127b78fef38c2914c4ececc3c#gistcomment-2758860)

# Add directory to $PATH

add to {bash,zsh}rc

	export PATH=~/.local/bin:$PATH
# Append output to file with sudo

	$ ls -la | sudo tee -a /etc/file
# Change directory ownership

	$ sudo chown -R USER ~/path/to/dir
# Change email stored in RSA key

	ssh-keygen -c -f ~/.ssh/id_rsa -C "b@bdeak.net"
# Change hostname

	$ sudo hostnamectl set-hostname srv1.bdeak.net
	$ sudo vi /etc/hosts # replace old hostname with new
# Change ssh key passphrase

	$ ssh-keygen -p
# Change welcome message

	$ vi /etc/motd
# Check if machine is 64 or 32 bit

	$ getconf LONG_BIT
# Clone disk

this can destroy your data. use carefully

	# dd if=/dev/sda of=/dev/sdb conv=noerror,sync
# Colored man pages

add to {bash,zsh}rc

	export LESS_TERMCAP_md=$'\e[01;36m'
	export LESS_TERMCAP_me=$'\e[0m'
	export LESS_TERMCAP_so=$'\e[01;32m'
	export LESS_TERMCAP_se=$'\e[0m'
# Compress file with gzip

	$ gzip file
# Connect to Windows remote desktop from Debian

	$ sudo apt-get install rdesktop
	$ rdesktop -p- 192.168.100.28
# Count number of lines in directory

	$ find . -type f -exec cat {} + | wc -l
# Create disk image

this can destroy your data. use carefully

	# dd if=/dev/sda of=~/disk.img
# Decompress .gz file

	$ gunzip file.gz
# Diff output of 2 Unix commands

bash:

	$ diff <(cmd1) <(cmd2)

zsh:

	$ diff =(cmd1) =(cmd2)
# Echo without newline

	$ echo -n without newline
# Edit last command in editor

	$ fc
# Extract .rar file

	$ sudo apt install unrar
	$ unrar x -r file.rar
# Extract .zip file

	$ unzip file.zip
# Flush Debian DNS cache

	$ sudo systemd-resolve --flush-caches
# Forward router admin panel over SSH

	$ ssh rpi -L 3000:192.168.100.1:80
# Get distribution release info

	$ lsb_release -a

# Get file count in current directory

	$ ls -A | wc -l
# Get file format

	$ file todo.txt
# Get file magic number

	$ file server.go
# Get first X lines of output

	$ head -X
# Get kernel version

	$ uname -sr

or

	$ uname -a
# Get LAN IP address

	$ hostname -I
# Get last X lines of output

	$ tail -X
# Get network hardware info

	$ sudo lshw -C network
# Get program PID

	$ pidof firefox
# Kill process that is locking file

	$ fuser -k todo.txt
# Kill program running on port

	$ kill $(lsof -t -i:8080)
# Linux add user to group

	$ usermod -aG group bartol
# Linux change default shell

	$ sudo chsh -s $(which zsh)
# Linux change directory permissions

	$ chmod -R 644 dir
# Linux change file permissions

	$ chmod 644 file
# Linux change owner

	$ chown bartol file
# Linux change user password

	$ passwd
# Change user shell

	$ chsh -s $(which zsh) bartol
# Linux create new group

	$ addgroup group
# Linux create new user

	$ adduser bartol
# Linux delete group

	$ delgroup group
# Linux delete user

	$ deluser bartol
# Linux directory permissions

- `r` - dozvola za pregled direktorija
- `w` - dozvola za brisanje i izradu datoteka i poddirektorija
- `x` - dozvola za ulaz u direktorij
# Linux empty trash

	$ trash-empty
# Linux file permissions

- `r` - read permission
- `w` - write permission
- `x` - execute permission
# Linux find device path

	$ lsblk -p
# Linux find router local IP address

	$ ip route | grep "default via" | awk '{print $3}'
# Linux flash .img to USB

	$ sudo dd bs=4M if=path/to/file.img of=/dev/sdX status=progress conv=fsync
# Linux flash .iso to USB

	$ sudo dd bs=4M if=path/to/file.iso of=/dev/sdX status=progress conv=fsync
# Linux get MD5 hash

	$ md5sum todo.txt
# Linux get SHA-1 hash

	$ sha1sum todo.txt
# Linux get SHA-256 hash

	$ sha256sum todo.txt
# Linux get SHA-512 hash

	$ sha512sum todo.txt
# Linux permissions

	rwxr-xr-x 755
	rw-r--r-- 644
	r--r--r-- 444

	r = 4
	w = 2
	x = 1
# Linux remove user from group

	$ deluser bartol group
# Linux resize image

	$ convert desktop.png -resize 800x[600] desktop2.png
# Linux signals

Simbol  | Number | Description
------- | ------ | ----------------------------------------------
SIGHUP  | 1      | Hangup - terminal turned off
SIGINT  | 2      | Terminal interrupt - `Ctrl+C`
SIGTERM | 15     | Terminate - administratively terminate process
SIGKILL | 9      | Kill - terminate immediately
# Linux switch user

	$ su - bartol
# Linux switch user to root

	$ su -
# Linux view thread count

	$ nproc
# List groups user is in

	$ groups
# List X display names

	$ w -h | awk '{print $3}' | sort -u
# List .zip file content

	$ unzip -l archive.zip
# Mount an ISO file

	$ sudo mkdir /media/iso
	$ sudo mount -o loop path/to/file.iso /media/iso

to unmount:

	$ sudo umount /media/iso
# Open file manager from shell

	$ xdg-open .
# Password protect file

encrypt:

	$ gpg -c file

decrypt:

	$ gpg file.gpg
# Paste file to pastebin

	$ pastebinit todo.txt
# Power off PC for X minutes

	# shutdown +10
# Power off PC

	# 
# Pretend to be busy

	$ while [ true ]; do head -n 100 /dev/urandom; sleep .1; done | hexdump -C | grep "ca fe"
# Print file in reverse

	$ tac todo.txt
# Process tree

	$ pstree
# Redirect standard error to standard output

	$ ls > file 2>&1
# Remove all but files with specific extension

	$ rm !(*.jpg|*.jpeg|*.png)
# Remove all but one specific file

	$ rm -f !(todo.txt)
# Remove sudo password

open `/etc/sudoers`

	$ sudo visudo

append

	bartol	ALL=(ALL) NOPASSWD:ALL
# Rename user

	$ sudo usermod -l <newuser> -d /home/<newuser> <olduser>
	$ sudo groupmod -n <newgroup> <oldgroup>
# Reset file mtime, atime and ctime

	$ touch file.txt
# Restart PC for X minutes

	# shutdown -r +10
# Restart PC

	# shutdown -r now
# Restore from disk image

this can destroy your data. use carefully

	# dd if=~/disk.img of=/dev/sdb
# Reuse last command's parameters

	$ !*
# Reverse DNS lookup

	$ dig +short -x 3.122.183.235
# Run previous command but replace

	$ host bdeak.net
	$ ^host^dig
# Run spell checker on file

	$ aspell check post.md
# Save last command to file

	$ echo "!!" > cmd.sh
# Save standard error to file

	$ ls 2> file
# Save standard output to file

	$ ls > file
# Securely erase drive

	$ sudo shred -v -n1 /dev/sdX

then open gparted and click: `Device` -> `Create partition table`
# Setup dotfiles

	$ git clone https://git.bdeak.net/config ~/dev/config.tmp
	$ ~/dev/config.tmp/.local/bin/config-symlink ~/dev/config.tmp -b
	$ git-clone config
	$ config-symlink ~/dev/config -f
	$ rm -rf ~/dev/config.tmp

# Show partition table

	# parted -l
# Show running processes

	$ ps ax
# Show size of files and directories

	$ ls | xargs du -sh

Why not `ls -l`?

`ls -l` shows only size of files, not directories.
# SSH copy key to server

	$ ssh-copy-id server

or

	$ ssh-copy-id -i ~/.ssh/key server
# SSH disable password login

	$ sudo vi /etc/ssh/sshd_config

set

	PasswordAuthentication no

exit, then

	$ sudo systemctl reload ssh
# SSH disable root login

	$ sudo vi /etc/ssh/sshd_config

set

	PermitRootLogin no

exit, then

	$ sudo systemctl reload ssh
# SSH tunneling

ssh to `pc` proxied through `rpi` that has public ip address

	Host rpi
		User pi
		Hostname (public ip)

	Host pc
		ProxyJump rpi
		User bartol
		Hostname (local ip)
# Stop and resume process

stop:

	$ kill -STOP pid

resume:

	$ kill -CONT pid
# Top sort by CPU usage

`P`
# Top sort by memory usage

`M`
# Trace packets received from web server

	$ mtr bartol.dev

or

	$ traceroute bartol.dev
# Ubuntu VPN open .ovpn

	$ sudo apt install network-manager-openvpn-gnome

restart settings
# Update locate file database

	$ updatedb
# View available timezones

	$ timedatectl list-timezones
# View current directory disk space usage

	$ du -hs * | sort -rh
# View current time

	$ timedatectl
# View description of the file system hierarchy

	$ man hier
# View directory disk space usage

	$ du -hs /path/to/dir | sort -rh

or

	$ ncdu /path/to/dir
# View disk space usage

	$ df -h

or

	$ ncdu /
# View file mtime, atime and ctime

	$ stat file.txt
# View most invoked commands in history

	$ grep -oP '(^| +\| +)\K[^ ]+' "$HISTFILE" | sort | uniq -c | sort -nr | head -n100

[source](https://lobste.rs/s/eprvjp/what_are_your_favorite_non_standard_cli#c_irtkm9)
# View OOXML/ODF source

	$ unzip -d file file.docx
# View opened TCP connections

	$ ss -t

or

	$ netstat -t
# View opened UDP connections

	$ ss -u

or

	$ netstat -u
# View PC uptime

	$ uptime
# View process resource usage

	$ time ls
# View process system calls

	$ strace ls
# View process that is listening on port

	$ lsof -i:port

for all ports:

	$ lsof -i
# View suspended processes

	$ jobs
# View systemd service logs

	journalctl -u nginx.service

only today's logs:

	journalctl -u nginx.service --since today

multiple services:

	journalctl -u nginx.service -u api.service --since today
# View system memory usage

	$ free -m | awk 'NR==2{printf "%d\n",$3*100/$2}'

# View system's host name

	$ hostname
# View TCP traffic

	# tcpdump
# View weather info

	$ curl wttr.in/<city>
# Web server systemd service

`/lib/systemd/system/name.service`

	[Unit]
	Description=www

	[Service]
	Type=simple
	Restart=always
	RestartSec=5
	Environment="PASSWORD=xxxxxxxxxxxx"
	ExecStart=/home/bartol/bartol.dev/server.py

	[Install]
	WantedBy=multi-user.target
# Wi-Fi analyzer

	$ sudo apt install wavemon
	$ wavemon
# Write output to file with sudo

	$ ls -la | sudo tee /etc/file
