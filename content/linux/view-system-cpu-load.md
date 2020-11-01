# View system CPU load

	$ mpstat 1 2 | awk 'END{printf "%d\n",100-$NF}'

