# Fix out of memory issue when compiling on VPS

create swap:

	$ sudo dd if=/dev/zero of=/swapfile bs=64M count=16
	$ sudo mkswap /swapfile
	$ sudo swapon /swapfile

after compilation delete swap (optional):

	$ sudo swapoff /swapfile
	$ sudo rm /swapfile

