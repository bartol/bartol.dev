password protect directory:
encrypt: tar -cz <directory> | gpg -c -o <directory>.tgz.gpg
decrypt: gpg -d <directory>.tar.gpg | tar -xz

tar -czvf <archive>.tgz <directory>     archive and compress directory
tar -czvf <archive>.tgz <file> <file>   archive and compress files
tar -xzvf <archive>.tgz                 decompress and extract archive
tar -tzvf <archive>.tgz                 files in archive

curl <url> | tar -xvzf -                extract remote file
wget -qO- <url>                         remote file content
curl <url>                              remote file content

jobs                                    background jobs
