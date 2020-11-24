# Linux

## Send clipboard to another machine in local network

receiver:

    $ nc -l 1234 | xclip -selection clipboard

sender:

    $ xclip -selection clipboard -o | nc <receiver-hostname> 1234