# Install software

	$ sudo apt update
	$ sudo apt upgrade
	$ sudo apt install git ssh curl vim-gtk ack entr editorconfig xclip trash-cli ripgrep htop net-tools youtube-dl tree \
		golang-go nodejs npm arduino python3-pip sqlite3 libsqlite3-dev shellcheck ruby ruby-dev vagrant \
		gnome-disk-util gparted xfce4-clipman network-manager-openvpn-gnome obs-studio ffmpeg vlc wireshark virtualbox thunderbird
	$ pip3 install ansible
	$ gem install mailcatcher

	$ git clone https://github.com/vrothberg/vgrep /tmp/vgrep
    $ cd /tmp/vgrep
    $ make build
    $ make install
