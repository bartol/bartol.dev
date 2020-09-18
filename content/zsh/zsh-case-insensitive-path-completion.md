# Zsh case insensitive path completion

add to zshrc

	zstyle ':completion:*' matcher-list '' 'm:{a-z}={A-Z}' 'm:{a-zA-Z}={A-Za-z}' 'r:|[._-]=* r:|=* l:|=*'

or

	zstyle ":completion:*" matcher-list \
		"m:{[:lower:][:upper:]}={[:upper:][:lower:]}" \
		"m:{[:lower:][:upper:]}={[:upper:][:lower:]} l:|=* r:|=*" \
		"m:{[:lower:][:upper:]}={[:upper:][:lower:]} l:|=* r:|=*" \
		"m:{[:lower:][:upper:]}={[:upper:][:lower:]} l:|=* r:|=*"
