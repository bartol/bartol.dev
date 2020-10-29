# View most invoked commands in history

	$ grep -oP '(^| +\| +)\K[^ ]+' "$HISTFILE" | sort | uniq -c | sort -nr | head -n100

[source](https://lobste.rs/s/eprvjp/what_are_your_favorite_non_standard_cli#c_irtkm9)
