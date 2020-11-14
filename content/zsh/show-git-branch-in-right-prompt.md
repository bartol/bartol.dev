# Show Git branch in right prompt

	RPROMPT='$(git rev-parse --abbrev-ref HEAD 2>/dev/null)'
	setopt prompt_subst

