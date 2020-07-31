# SSH disable password login

	$ sudo vi /etc/ssh/sshd_config

set

	PasswordAuthentication no

exit, then

	$ sudo systemctl reload ssh
