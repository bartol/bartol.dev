# gpg

## Generate new key

    $ gpg --full-generate-key

## List keys

    $ gpg --list-secret-keys

## Export public key

    $ gpg --output <file> --armor --export <email>

## Export private key

    $ gpg --output <file> --armor --export-secret-key <email>

## Import key

    $ gpg --import <private-key-file>
