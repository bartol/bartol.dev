# prompt
autoload -Uz promptinit && promptinit
PROMPT="%F{cyan}[%n@%m %~]%f%(#.#.$) "
RPROMPT='%(?..%?) $(git rev-parse --abbrev-ref HEAD 2>/dev/null) %*'
setopt prompt_subst

# autocomplete
autoload -Uz compinit && compinit
zstyle ':completion:*' matcher-list '' 'm:{a-z}={A-Z}' 'm:{a-zA-Z}={A-Za-z}' 'r:|[._-]=* r:|=* l:|=*'

# history
setopt sharehistory
HISTSIZE=1000000
SAVEHIST=$HISTSIZE
HISTFILE=~/.zsh_history

# editor
bindkey -e
export EDITOR=vim
autoload -Uz edit-command-line
zle -N edit-command-line
bindkey "^x^e" edit-command-line

# aliases
alias x='vim ~/x'
alias t="cd $(mktemp -d /tmp/dir.XXXXX)"

# env variables
export PATH=~/bin:$PATH
export GOPATH=~/.go
export PATH=~/.go/bin:$PATH
