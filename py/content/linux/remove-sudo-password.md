# Remove sudo password

open `/etc/sudoers`

	$ sudo visudo

append

	bartol	ALL=(ALL) NOPASSWD:ALL
