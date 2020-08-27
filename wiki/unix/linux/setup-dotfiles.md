# Setup dotfiles

	$ git clone https://git.bartol.dev/config ~/config

	$ ln -sb ~/config/.vimrc ~
	$ ln -sb ~/config/.bashrc ~
	$ ln -sb ~/config/.inputrc ~
	$ ln -sb ~/config/.gitconfig ~
	$ ln -sb ~/config/.editorconfig ~

	$ mkdir ~/.ssh
	$ ln -sb ~/config/.ssh/config ~/.ssh/

	$ mkdir ~/.local/bin
	$ ln -s ~/config/.local/bin/* ~/.local/bin/
