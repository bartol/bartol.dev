#!/usr/bin/env python3

import sys
from pathlib import Path
from subprocess import run
from slugify import slugify

out_dir = '../wiki'

title   = sys.argv[1]
subpath = sys.argv[2]

path    = out_dir + '/' + subpath + '/' + slugify(title) + '.md'
content = '# ' + title + '\n\n\n'

Path(path).write_text(content)
run(['vim', '+', '+startinsert', path])
