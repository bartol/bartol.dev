# Fix oversaturated colors in Firefox

Open `about:config` in your browser, accept warning and change few settings.

- `gfx.color_management.display_profile` make sure this one is empty
- `gfx.color_management.enablev4` set value to `true`
- `gfx.color_management.mode` set value to `1`
- `gfx.color_management.rendering_intent` set value to `0`

Restart browser if needed.

[source](https://bugzilla.mozilla.org/show_bug.cgi?id=1250461)
