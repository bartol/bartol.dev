% zsh

	$ curl -L bdeak.net/c/.zshrc

## alias to create tmp folder

	$ alias t="cd $(mktemp -d /tmp/dir.XXXXX)"

## most used commands

	$ grep -oP '(^| +\| +)\K[^ ]+' "$HISTFILE" | sort | uniq -c | sort -nr | head -n30

[source](https://lobste.rs/s/eprvjp/what_are_your_favorite_non_standard_cli#c_irtkm9)
