# View system CPU load

	$ mpstat 1 2 | awk 'END{print "CPU Load: " 100.00-$NF "%"}'

