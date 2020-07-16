from glob import glob
from markdown import markdown

def get_tree(root):
    posts = []
    for path in glob(root + "/*/"): # folders
        posts.append({ 'title': path[len(root):], 'path': '/' + path[len('content/'):-1], 'children': get_tree(path) })
    for path in glob(root + "/*.md"): # posts
        posts.append({ 'title': get_post_title(path), 'path': '/' + path[len('content/'):-len('.md')], 'children': [] })
    return posts

def get_post_title(path):
    with open(path) as f: 
        return f.readline()[len('# '):-1]

def get_post_content(path):
    with open(path) as f:
        return markdown(''.join(f.readlines()))

def get_post_path(subpath):
    if subpath[-1] == '/':
        subpath = subpath[:-1]
    return 'content/' + subpath + '.md'