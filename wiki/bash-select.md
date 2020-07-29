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
