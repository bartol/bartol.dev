# Bash


## Non-interactive

### All arguments

    $@

### Case statement default value

	case $1 in
		*)
			echo catch-all
		;;
	esac

### Case statement multiple values

	case $1 in
		hi|hello)
			echo hi or hello
		;;
	esac

# Case statement value ends with

	case $1 in
		*l)
			echo ends with l
		;;
	esac

# Bash case value includes

	case $1 in
		*t*)
			echo includes t
		;;
	esac

# Bash case value starts with

	case $1 in
		b*)
			echo starts with b
		;;
	esac

# Bash check if string is empty

	[ -z $str ] && echo empty

# Bash check if string is not empty

	[ -n $str ] && echo not empty

# Bash cleanup tmp files

	function cleanup {
		rm -f $TMPFILE
		exit 1
	}
	trap cleanup EXIT

# Bash convert string into lowercase

	strlc=${str,,}

# Bash convert string into uppercase

	struc=${str^^}

# Bash create tmp file

	TMPFILE=$(mktemp /tmp/my-script.XXXXX)

# Bash exit status of last command

	$?

# Bash for loop

	for i in {1..10}; do
		echo $i
	done

# Bash multiline echo

	cat <<EOF
	line 1
	line 2
	line 3
	EOF

# Bash number of arguments

	$#

# Bash print all aliases

	$ alias

# Bash create aliases

	$ alias g="git"

# Bash print all environment variables

	$ env

# Bash print all variables

	$ set

# Bash shebang

	#!/usr/bin/env bash

# Bash script name

	$0

# Bash script pid

	$$

# Bash select

	#!/usr/bin/env bash

	distros="Ubuntu  Arch  CentOS  Gentoo  Quit"
	select  distro  in  $distros; do
		if [ $distro  == "Quit" ]; then
			break;
		fi;
		echo  Tvoja je  omiljena  distribucija  $distro;
	done
	echo "Bilo mi je drago"

# Check if file exists in Bash

	if [ -e file ]; then
		# ...
	fi

# Check if file isn't empty in Bash

	if [ -s file ]; then
		# ...
	fi

# Check if in SSH

	if [ -n "$SSH_TTY" ]; then
		# ...
	fi

# Check if program exists

	if command -v kak >/dev/null; then
		# ...
	fi

# Multiple variable assignments from command output

	read day month year <<< $(date +'%d %m %y')

	echo $day
	echo $month
	echo $year

# Run process in background

	$ go run main.go &



## Interactive

### Case insensitive completion

add to `~/.inputrc`

	set completion-ignore-case on

# Bash comment out line shortcut

`Alt + #`

# Bash expand completion

`Esc*`

# Bash expand glob

`^x*`

# Bash open current line in editor

`^x^e`

# Rerun last command with sudo

	$ sudo !!

# Rerun last command

	$ !!

# Run command without alias

	$ \ls