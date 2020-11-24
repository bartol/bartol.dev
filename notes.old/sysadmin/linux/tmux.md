# Tmux attach to last session

	$ tmux attach
# Tmux attach to session

	$ tmux attach -t sessionName
# Tmux close current pane

`Ctrl + b` and then `x`
# Tmux close current window

`Ctrl + b` and then `&`
# Tmux create new window

`Ctrl + b` and then `c`
# Tmux delete all sessions

	$ tmux kill-session -a
# Tmux delete session

	$ tmux kill-session -t sessionName

# Tmux list all sessions

	$ tmux ls
# Tmux move in copy mode

- `h` - move left
- `j` - move down
- `k` - move up
- `l` - move right
- `g` - go to top
- `G` - go to bottom
- `w` - move one word forward
- `b` - move one word backward
# Tmux open new session

	$ tmux new -s sessionName
# Tmux quit copy mode

`q`
# Tmux rename current session

`Ctrl + b` and then `$`
# Tmux rename current window

`Ctrl + b` and then `,`
# Tmux resize current pane

`Ctrl + b` and then **hold** arrow key in direction you want to resize.
# Tmux search in copy mode

`/` followed by search query and then `enter`

- `n` - show next result
- `N` - show previous result
# Tmux select in copy mode

- `space` - start selection
- `enter` - copy selection
- `esc` - discard selection
- `V` - select whole line
# Tmux split window horizontally

`Ctrl + b` and then `"`
# Tmux split window vertically

`Ctrl + b` and then `%`
# Tmux switch to copy mode

`Ctrl + b` and then `[`
# Tmux switch to next window

`Ctrl + b` and then `n`
# Tmux switch to pane

`Ctrl + b` and then arrow key in direction of pane.
# Tmux switch to previous window

`Ctrl + b` and then `p`
# Tmux switch to window with number

`Ctrl + b` and then number of window
# Tmux transform pane to window

`Ctrl + b` and then `!`
