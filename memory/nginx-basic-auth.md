# Nginx basic auth

	auth_basic "Restricted site";
	auth_basic_user_file /opt/nginx/.htpasswd;

add user:

	$ echo -n 'bartol:' >> /opt/nginx/.htpasswd
	$ openssl passwd >> /opt/nginx/.htpasswd