from flask import Flask, render_template, jsonify
from os.path import isfile, isdir
import helpers

app = Flask(__name__)

@app.route('/')
def index():
    posts = helpers.get_tree('content/')
    return render_template('index.html', posts=posts)

@app.route('/<path:subpath>')
def content(subpath):
    post_path = helpers.get_post_path(subpath)
    dir_path = 'content/' + subpath
    if isfile(post_path):
        title = helpers.get_post_title(post_path)
        content = helpers.get_post_content(post_path)
        return render_template('post.html', title=title, content=content)
    if isdir(dir_path):
        posts = helpers.get_tree(dir_path)
        return render_template('index.html', title=subpath, posts=posts)
    return render_template('404.html'), 404

@app.errorhandler(404)
def not_found(e):
    return render_template('404.html'), 404

# $ python3.6 -m venv .venv
# $ . .venv/bin/activate
# $ pip install flask markdown
# $ export FLASK_APP=server.py
# $ export FLASK_DEBUG=1
# $ flask run