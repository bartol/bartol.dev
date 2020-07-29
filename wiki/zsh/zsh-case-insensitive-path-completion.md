# Zsh case insensitive path completion

add to zshrc

	zstyle ":completion:*" matcher-list \
		"m:{[:lower:][:upper:]}={[:upper:][:lower:]}" \
		"m:{[:lower:][:upper:]}={[:upper:][:lower:]} l:|=* r:|=*" \
		"m:{[:lower:][:upper:]}={[:upper:][:lower:]} l:|=* r:|=*" \
		"m:{[:lower:][:upper:]}={[:upper:][:lower:]} l:|=* r:|=*"
