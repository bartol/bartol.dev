---
layout: post
title: Tmux commands I always forget
---

<!-- split this post -->

Tmux is terminal multiplexer. What is that? Running multiple terminals at once.
Can't get much simpler than that.

But why am I reading this, my terminal
already has this feature? To some extent yes, but Tmux has much more
functionality than your average terminal. This article will provide cheatsheet
for commands you'll use day-to-day in tmux.

## Sessions

Tmux sessions work like Virtual Machines. You can turn them on (attach to them)
and turn them off (detach from them) and they'll save working state.

### Open new session

```bash
tmux
```

### Open new session with name

```bash
tmux new -s sessionName
```

### Delete session

```bash
tmux kill-session -t sessionName
```

### Delete all sessions

```bash
tmux kill-session -a
```

### Rename current session

`Ctrl + b` and then `$`

### List all sessions

```bash
tmux ls
```

### Attach to last session

```bash
tmux attach
```

### Attach to session with name

```bash
tmux attach -t sessionName
```

## Windows

Don't worry, we aren't talking about Microsoft Windows. If you've never worked with tmux windows before, they are nothing fancy, think about them like tabs in classical terminal.

### Create new window

`Ctrl + b` and then `c`

### Close current window

`Ctrl + b` and then `&`

### Switch to next window

`Ctrl + b` and then `n`

### Switch to previous window

`Ctrl + b` and then `p`

### Switch to window with number

`Ctrl + b` and then number of window

### Rename current window

`Ctrl + b` and then `,`

## Panes

Like splits in Vim, tmux panes enable you to use two programs side by side.

### Split vertically

`Ctrl + b` and then `%`

### Split horizontally

`Ctrl + b` and then `"`

### Switch to pane

`Ctrl + b` and then arrow key in direction of pane.

### Resize current pane

`Ctrl + b` and then **hold** arrow key in direction you want to resize.

### Close current pane

`Ctrl + b` and then `x`

### Transform pane to window

`Ctrl + b` and then `!`

## Copy mode

While starting out with tmux, you've probably noticed that you can't scroll up.
Well, you actually can. But it's bit more complicated than that. You have to
switch to so-called Copy mode. Copy mode uses key bindings that will be very
familiar to Vim users.

### Switch to copy mode

`Ctrl + b` and then `[`

### Quit copy mode

`q`

### Moving around

- `h` - move left
- `j` - move down
- `k` - move up
- `l` - move right
- `g` - go to top
- `G` - go to bottom
- `w` - move one word forward
- `b` - move one word backward

### Select

- `space` - start selection
- `enter` - copy selection
- `esc` - discard selection
- `V` - select whole line

### Search

`/` followed by your search query and then `enter`

- `n` - show next result
- `N` - show previous result

And that is it. These are all tmux commands I use (and always forget).
