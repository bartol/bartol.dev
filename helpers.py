from glob import glob
from markdown import markdown
from os.path import basename

def get_tree(root):
    posts = []
    for path in sorted(glob(root + "/*/")): # directories
        posts.append({ 
            'title': get_dir_title(path), 
            'path': '/' + path[:-len('/')], 
            'children': get_tree(path) 
        })
    for path in sorted(glob(root + "/*.md")): # posts
        posts.append({ 
            'title': get_post_title(path), 
            'path': '/' + path[:-len('.md')],
            'children': [] 
        })
    return posts

def get_list(root):
    posts = []
    for path in sorted(glob(root + "/**/*.md", recursive=True)):
        posts.append({ 
            'title': get_post_title(path), 
            'path': '/' + path[:-len('.md')]
        })
    return posts

def get_post_title(path):
    with open(path) as f: 
        return f.readline()[len('# '):-1]

def get_post_source(path):
    with open(path) as f:
        return ''.join(f.readlines())

def get_post_html(path):
    return markdown(get_post_source(path))

def get_post_path(path):
    if path and path[-1] == '/':
        path = path[:-len('/')]
    return 'memory' + path + '.md'

def get_dir_title(path):
    if path and path[-1] == '/':
        path = path[:-len('/')]
    return basename(path) + '/'

def get_dir_path(path):
    return 'memory' + path