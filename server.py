#!/usr/bin/env python3

import web
import os
import json
import helpers

urls = (
    '/', 'index',
    '/wiki([^\.]*)(|\.html|\.json|\.md)', 'wiki',
)
app = web.application(urls, globals())
wsgiapp = app.wsgifunc()

render = web.template.render('templates', base='layout')

class index:
    def GET(self):
        return render.index()

class wiki:
    def GET(self, path, content_type):
        post_path = helpers.get_post_path(path)
        if os.path.isfile(post_path):
            if content_type == '.json':
                web.header('Content-Type', 'application/json')
                return json.dumps({
                    'title': helpers.get_post_title(post_path),
                    'source': helpers.get_post_source(post_path),
                    'html': helpers.get_post_html(post_path)
                })

            if content_type == '.md':
                web.header('Content-Type', 'text/plain')
                return helpers.get_post_source(post_path)

            title = helpers.get_post_title(post_path)
            html = helpers.get_post_html(post_path)
            return render.wiki_post(title, html)

        dir_path = helpers.get_dir_path(path)
        if os.path.isdir(dir_path):
            if content_type == '.json':
                web.header('Content-Type', 'application/json')
                return json.dumps({
                    'title': helpers.get_dir_title(dir_path),
                    'posts': helpers.get_list(dir_path)
                })

            title = helpers.get_dir_title(dir_path)
            posts = helpers.get_tree(dir_path)
            return render.wiki_list(title, posts)

        raise web.notfound()

def notfound():
    return web.notfound(render.notfound())

app.notfound = notfound

if __name__ == "__main__":
    app.run()
