# View system CPU load

	$ mpstat 1 2 | awk 'END{print 100-$NF}'

