# Customize prompt in Zsh

	PROMPT="[%n@%m %~]%(#.#.$) "

- `%n` - username
- `%m` - hostname
- `%~` - relative path
- `%/` - absolute path
- `%1~` - current directory
- `%#` - `#` for root user, `%` for others
- `%(#.#.$)` - `#` for root user, `$` for others
- `%?` - exit code of previous command