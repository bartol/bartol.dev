# Cron send email with output

	$ sudo apt install postfix

select satellite system

enter system mail server name (like laptop.bdeak.net)

enter smtp relay host (like srv1.bdeak.net:587)

add to `/etc/postfix/main.cf`

	smtp_use_tls = yes
	smtp_sasl_auth_enable = yes
	smtp_sasl_password_maps = hash:/etc/postfix/sasl/sasl_passwd
	smtp_sasl_security_options = noanonymous
	smtp_sasl_tls_security_options = noanonymous

create `/etc/postfix/sasl/sasl_passwd`

	srv1.bdeak.net:587 robot@bdeak.net:password

then

	$ sudo postmap /etc/postfix/sasl/sasl_passwd
	$ sudo chown -R root:postfix /etc/postfix/sasl
	$ sudo chmod 750 /etc/postfix/sasl
	$ sudo chmod 640 /etc/postfix/sasl/sasl_passwd
	$ sudo systemctl restart postfix

and in crontab config add

	MAILTO=b@bdeak.net

[source](https://askubuntu.com/a/1042819)
