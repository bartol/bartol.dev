# SSH disable root login

	$ sudo vi /etc/ssh/sshd_config

set

	PermitRootLogin no

exit, then

	$ sudo systemctl reload ssh
