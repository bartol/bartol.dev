# Access Rails server from local network

Add to `config/environments/development.rb`

	config.web_console.whitelisted_ips = %w( 0.0.0.0/0 ::/0 )

Run server with flag

	$ bin/rails server -b 0.0.0.0

Server is now accessible on `local_ip_of_your_machine:3000`
