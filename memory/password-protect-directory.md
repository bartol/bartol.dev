# Password protect directory

encrypt:

	$ tar c dir | gpg -c -o dir.tar.gpg

decrypt:

	$ gpg -d dir.tar.gpg | tar x
