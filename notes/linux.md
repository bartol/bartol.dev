% linux

## Send clipboard to another machine in local network

receiver:

	$ nc -l 1234 | xclip -selection clipboard

sender:

	$ xclip -selection clipboard -o | nc <receiver-hostname> 1234

## ssh

### kill session

`~` + `.` + Enter

## gpg

### Generate new key

	$ gpg --full-generate-key

### List keys

	$ gpg --list-secret-keys

### Export public key

	$ gpg --output <file> --armor --export <email>

### Export private key

	$ gpg --output <file> --armor --export-secret-key <email>

### Import key

	$ gpg --import <private-key-file>

## ffmpeg

### compress .mp4

	$ ffmpeg -i input.mp4 -vcodec libx265 -crf 28 output.mp4

[source](https://unix.stackexchange.com/a/38380)

### convert .mkv to .mp4

	$ ffmpeg -i input.mkv -codec copy output.mp4

### split video in chunks with FFmpeg

	$ ffmpeg -i input.mp4 -c copy -map 0 -segment_time 00:10:00 -f segment -reset_timestamps 1 output_%03d.mp4

adjust `-segment_time`

### mp4 fast start

puts metadata at the beginning

	$ ffmpeg -i input.mp4 -c copy -movflags +faststart output.mp4

## curl

### request urls from file

	$ xargs -n1 curl < urls.txt

### extract all links from url

	$ curl -sL <url> | grep -oP '(?<=href=").*?(?=")' | awk '{print (substr($0,0,1)=="/" ? "https://<domain>" : "")$0}'

### extract title from url

	$ curl -sL <url> | grep -oP '(?<=<title>).*(?=</title>)'

## system memory usage %

	$ free -m | awk 'NR==2{printf "%d\n",$3*100/$2}'

## system cpu usage %

	$ mpstat 1 2 | awk 'END{printf "%d\n",100-$NF}'

## system disk usage %

	$ df | awk '$NF=="/"{printf "%d\n",$5}'

## aws s3 cli

### list objects in bucket

	$ aws s3 ls <bucket>

### upload file

	$ aws s3 cp <file> s3://<bucket>/<file>

### download file

	$ aws s3 cp s3://<bucket>/<file> <file>

### upload from stdin

	$ <command> | aws s3 cp - s3://<bucket>/<file>

### download to stdout

	$ aws s3 cp s3://<bucket>/<file> -

## youtube-dl

### download .mp3

	$ youtube-dl --extract-audio --audio-format mp3 <url>

### download .mp4

	$ youtube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/mp4' <url>

## diff output of 2 commands

	$ diff <(command) <(command)

## list background jobs

	$ jobs

## send message to all logged in users

	# wall <message>

## grep

### search in file

	$ grep <query> <file>

### search in all files in directory recursively

	$ grep -R <query> <dir>

### return only filenames

	$ grep -Rl <query> <dir>

### case insensitive

	$ grep -i <query> <file>

### return all lines that don't match

	$ grep -v <query> <file>

### return all files that didn't match

	$ grep -RL <query> <dir>

### one or another word

	$ egrep "(one|another)" <file>

### optional characters

	$ grep "car[s]" <file>

### return only matched text

	$ grep -o <query> <file>

cp <file> <directory>
cp -r
mv <source> <target>
rm <file>
rm -r <directory>
rm <file>
echo
tar -xf
