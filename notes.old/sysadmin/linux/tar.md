

move to linux.md

# Archive and compress directory with tar

	$ tar cvzf etc.tar.gz /etc
# Archive and compress files with tar

	$ tar cvzf archive.tar.gz file1 file2
# Archive directory with tar

	$ tar cvf etc.tar /etc
# Archive files with tar

	$ tar cvf archive.tar file1 file2
# Decompress and extract .tar.gz file

	$ gunzip file.tar.gz
	$ tar xvf file.tar

or

	$ zcat file.tar.gz | tar xvf -

or

	$ tar zxvf file.tar.gz

# Extract .tar file

	$ tar xvf archive.tar
# Extract .tar.gz from internet without local saving

	$ wget -qO - "https://www.bdeak.net/archive.tar.gz" | tar zxvf -
# List content of tar archive

	$ tar tvf archive.tar
# Password protect directory

encrypt:

	$ tar c dir | gpg -c -o dir.tar.gpg

decrypt:

	$ gpg -d dir.tar.gpg | tar x
