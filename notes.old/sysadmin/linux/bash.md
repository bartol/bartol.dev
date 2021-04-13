# Bash

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

# Multiple variable assignments from command output

	read day month year <<< $(date +'%d %m %y')
	echo $day
	echo $month
	echo $year

# Add directory to $PATH

add to {bash,zsh}rc

	export PATH=~/.local/bin:$PATH

## Interactive

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
