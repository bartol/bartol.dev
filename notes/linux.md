% linux

## Send clipboard to another machine in local network

receiver:

	$ nc -l 1234 | xclip -selection clipboard

sender:

	$ xclip -selection clipboard -o | nc <receiver-hostname> 1234

## ssh

### kill session

`~` + `.` + Enter

### ssh fix permissions are too open error

	$ chmod 600 <key-file>

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

## systemd

### systemd service status

	$ systemctl status <service-name>

### enable systemd service

	# systemctl enable <service-name>

### disable systemd service

	# systemctl disable <service-name>

### start systemd service

	# systemctl start <service-name>

### stop systemd service

	# systemctl stop <service-name>

### restart systemd service

	# systemctl restart <service-name>

### print systemd service configuration

	$ systemctl cat <service-name>

## system memory usage %

	$ free -m | awk 'NR==2{printf "%d\n",$3*100/$2}'

## system cpu usage %

	$ mpstat 1 2 | awk 'END{printf "%d\n",100-$NF}'

## system disk usage %

	$ df | awk '$NF=="/"{printf "%d\n",$5}'

## system uptime

	$ uptime -p | cut -d" " -f2-

## system tasks

	$ ps -A --no-headers | wc -l

## system load average

	$ uptime | awk -F': ' '{print $2}'

## top sort by memory usage

	$ top -o\%MEM

## top sort by cpu usage

	$ top -o\%CPU

## top output to file

	$ top -bn1 > <file>

## ps sort by memory usage

	$ ps -A --sort -%mem

## ps sort by cpu usage

	$ ps -A --sort -%cpu

## ps customize columns

	$ ps -Ao pid,user,%cpu,%mem,time,command

## ps output without header

	$ ps -A --no-headers

## random number with x digits

	$ tr -cd 0-9 </dev/urandom | head -c <digits>

## view time info

	$ timedatectl

## list timezones

	$ timedatectl list-timezones

## change timezone

	# timedatectl set-timezone <timezone-name>

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

## output every fifth line

	$ <command> | awk 'NR % 5 == 0'

## diff output of 2 commands

	$ diff <(command) <(command)

## list background jobs

	$ jobs

## list currently logged in users

	$ w

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
