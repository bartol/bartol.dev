# NetworkManager OpenVPN support

	$ sudo apt install network-manager-openvpn-gnome
# NetworkManager Wireguard support

	$ sudo apt install wireguard git dh-autoreconf libglib2.0-dev intltool build-essential libgtk-3-dev libnma-dev libsecret-1-dev network-manager-dev resolvconf
	$ git clone https://github.com/max-moser/network-manager-wireguard
	$ cd network-manager-wireguard
	$ ./autogen.sh --without-libnm-glib
	$ ./configure --without-libnm-glib --prefix=/usr --sysconfdir=/etc --libdir=/usr/lib/x86_64-linux-gnu --libexecdir=/usr/lib/NetworkManager --localstatedir=/var
	$ make
	$ sudo make install

[source](https://askubuntu.com/a/1233341)
# Thunar browse filesystem as root

`^L`

then enter `admin:///var/log`
# Thunar connect to WebDAV

`^L`

then enter `davs://url`

example: `davs://b@bartol.dev@myfiles.fastmail.com`
# Thunar show hidden files shortcut

`Ctrl+H`
# Xfce app finder shortcut

`Alt + F3`
# Xfce maximize window shortcut

`Alt + F10`
# Xfce terminal block select

Hold `Ctrl` and select
# Xubuntu kill window shortcut

`Ctrl+Alt+Escape`
# Xubuntu lock screen shortcut

`Super+L` or `Ctrl+Alt+Delete`
