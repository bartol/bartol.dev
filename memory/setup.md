# Setup

## Xubuntu

1. Download ISO .torrent from [xubuntu.org](https://xubuntu.org/download)
1. Download ISO using [Transmission](https://transmissionbt.com/)
1. Flash ISO to USB using [balenaEtcher](https://www.balena.io/etcher/)
1. Boot to USB and follow instructions

## Install and upgrade software

- Update package info

	  $ sudo apt update

- Upgrade existing software

	  $ sudo apt upgrade

- Install new software

	  $ sudo apt install git curl vim-gtk ack entr xclip trash-cli golang-go

## Firefox

1. Download [these](/memory/browser-extensions) extensions and enable them to
run in private mode
1. Customize toolbar icons (Menu > Customize)
1. Check "Restore previous session" (Menu > Preferences > General > Startup)
1. Uncheck "Ask to save logins and passwords" (Menu > Preferences > Privacy &
Security > Logins and Passwords)
1. Adjust Bitwarden vault timeout (Bitwarden > Settings > Security)
1. Add EasyList Cookie filters to uBlock Origin (uBlock Origin > Dashboard >
Filter lists > Annoyances)

## Xfce

...

## GitHub

1. Create SSH key

	   $ ssh-keygen -t rsa -b 4096 -C "b@bartol.dev"

1. Start SSH agent

	   $ eval "$(ssh-agent -s)"

1. Add key to SSH agent

	   $ ssh-add ~/.ssh/id_rsa

1. Copy key to clipboard

	   $ xclip -sel clip < ~/.ssh/id_rsa.pub

1. Add key in [GitHub settings](https://github.com/settings/keys)

## Dotfiles

	$ git clone https://github.com/bartol/dotfiles
	$ ln -sb dotfiles/.vimrc
	$ ln -sb dotfiles/.bashrc
	$ ln -sb dotfiles/.inputrc
	$ ln -sb dotfiles/.gitconfig
	$ ln -sb dotfiles/.editorconfig

## Projects

	$ mkdir dev
	$ cd dev
	$ git clone https://github.com/bartol/bartol.dev
