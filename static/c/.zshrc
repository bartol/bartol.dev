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

# aliases
t() { cd $(mktemp -d /tmp/dir.XXXXX) } # create tmp dir
b() { cp $1{,.$(date +%Y-%m-%d)} } # snapshot file

# env variables
export PATH=~/bin:$PATH
export GOPATH=~/.go
export PATH=~/.go/bin:$PATH
