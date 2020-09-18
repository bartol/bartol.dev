# Setup GitHub

1. Create SSH key

		$ ssh-keygen -t rsa -b 4096 -C "b@bartol.dev"

1. Start SSH agent

		$ eval "$(ssh-agent -s)"

1. Add key to SSH agent

		$ ssh-add ~/.ssh/id_rsa

1. Copy key to clipboard

		$ xclip -sel clip < ~/.ssh/id_rsa.pub

1. Add key in [GitHub settings](https://github.com/settings/keys)
