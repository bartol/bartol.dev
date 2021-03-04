% zsh

	$ curl -L bdeak.net/c/.zshrc

## most used commands

	$ grep -oP '(^| +\| +)\K[^ ]+' "$HISTFILE" | sort | uniq -c | sort -nr | head -n30

[source](https://lobste.rs/s/eprvjp/what_are_your_favorite_non_standard_cli#c_irtkm9)

## search command history

`Ctrl` + `r`

## shortcuts

- Ctrl-b: Move backward by one character
- Ctrl-f: Move forward by one character
- Alt-b: Move backward by one word
- Alt-f: Move forward by one word
- Ctrl-a: Move to the beginning of the line
- Ctrl-e: Move to the end of the line
- Ctrl-k: Delete from the cursor forward
- Ctrl-u: Delete whole line
- Alt-d: Delete next word
- Ctrl-r: Search the command history

## reexecute cmd

	$ !!

## run cmd with arguments from previous

	$ <cmd> !*

## view last x entries in history

	$ history

## run command from history

	$ !<num>
