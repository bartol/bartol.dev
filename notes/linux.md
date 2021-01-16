# linux

## Send clipboard to another machine in local network

receiver:

    $ nc -l 1234 | xclip -selection clipboard

sender:

    $ xclip -selection clipboard -o | nc <receiver-hostname> 1234

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

## print systemd service configuration

	$ systemctl cat <service-name>
