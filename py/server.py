#!/usr/bin/env python3

import web
import os
import helpers

urls = (
    '/(.*)', 'content',
)
app = web.application(urls, globals())
render = web.template.render('templates', base='layout')

class content:
    def GET(self, path):
        post_path = helpers.get_post_path(path)
        dir_path = helpers.get_dir_path(path)
        if os.path.isfile(post_path):
            title = helpers.get_post_title(post_path)
            content = helpers.get_post_content(post_path)
            return render.post(title, content)
        if os.path.isdir(dir_path):
            posts = helpers.get_tree(dir_path)
            return render.index(path, posts)
        raise web.notfound()

def notfound():
    return web.notfound(render.notfound(web.ctx.path))

app.notfound = notfound

if __name__ == "__main__":
    app.run()