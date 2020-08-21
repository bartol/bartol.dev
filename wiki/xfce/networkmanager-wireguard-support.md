# NetworkManager Wireguard support

	$ sudo apt install wireguard git dh-autoreconf libglib2.0-dev intltool build-essential libgtk-3-dev libnma-dev libsecret-1-dev network-manager-dev resolvconf
	$ git clone https://github.com/max-moser/network-manager-wireguard
	$ cd network-manager-wireguard
	$ ./autogen.sh --without-libnm-glib
	$ ./configure --without-libnm-glib --prefix=/usr --sysconfdir=/etc --libdir=/usr/lib/x86_64-linux-gnu --libexecdir=/usr/lib/NetworkManager --localstatedir=/var
	$ make
	$ sudo make install

[source](https://askubuntu.com/a/1233341)
