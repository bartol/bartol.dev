#!/usr/bin/env python3

import sys, os
from pathlib import Path
from slugify import slugify

out_dir = '../content'

title   = sys.argv[1]
subpath = sys.argv[2] if len(sys.argv) > 2 else ''

path    = out_dir + '/' + subpath + '/' + slugify(title) + '.md'
content = '# ' + title + '\n\n\n'

Path(path).write_text(content)
os.system('vim + +startinsert ' + path)
