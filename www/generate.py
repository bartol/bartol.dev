#!/usr/bin/env python3

import os, json
from pathlib import Path
from string import Template
from markdown import markdown

layout_tmpl = Template(Path('./layout.html').read_text())
list_tmpl = Template(Path('./list.html').read_text())

src_dir = '../content'
out_dir = './out'

Path(out_dir).mkdir(exist_ok=True)
os.system("cp -r ./static/* ./out")

*nodes, report = json.loads(os.popen('tree -J ' + src_dir).read())


def get_title(src_path):
	return open(src_path).readline().rstrip()[len('# '):]


def render_title(node, src_path, add_suffix=False):
	if src_path == src_dir:
		return 'Bartol Deak'

	title = node['name']
	if node['type'] == 'file':
		title = get_title(src_path)

	if add_suffix:
		title += ' | Bartol Deak'

	return title


def get_list(nodes, src_path):
	content = '<ul>'
	for node in nodes:
		content += '<li>'

		relative_path = src_path[len(src_dir):] + '/' + Path(node['name']).stem
		node_src_path = src_path + '/' + node['name']

		content += '<a href="' + relative_path + '">'
		content += render_title(node, node_src_path)
		content += '</a>'

		if node['type'] == 'directory':
			content += get_list(node['contents'], node_src_path)

		content += '</li>'
	content += '</ul>'

	return content


def render_content(node, src_path):
	if node['type'] == 'file':
		return markdown(Path(src_path).read_text(), extensions=['tables'])
	else:
		return list_tmpl.substitute(
			title=render_title(node, src_path),
			list=get_list(node['contents'], src_path))


def render_nav_path(node, path, src_path):
	items = [('Bartol Deak', '/')]
	tmp_path = ''
	for item in path[1:]:
		tmp_path += '/' + item
		items.append((item, tmp_path))

	if src_path != src_dir:
		tmp_path += '/' + Path(node['name']).stem
		items.append((render_title(node, src_path), tmp_path))

	items = map(lambda i: '<a href="' + i[1] + '">' + i[0] + '</a>', items)
	return ' / '.join(items)


def gen(nodes, path = []):
	for node in nodes:
		src_path = '/'.join(path + [node['name']])
		out_path =  out_dir + '/' + '/'.join(path[1:] + [Path(node['name']).stem]) + '.html'

		if src_path == src_dir:
			out_path = out_dir + '/index.html'

		title    = render_title(node, src_path, add_suffix=True)
		content  = render_content(node, src_path)
		nav_path = render_nav_path(node, path, src_path)

		html = layout_tmpl.substitute(title=title, content=content, path=nav_path)
		Path(out_path).parent.mkdir(exist_ok=True)
		Path(out_path).write_text(html)

		print(out_path)

		if node['type'] == 'directory':
			gen(node['contents'], path + [node['name']])


gen(nodes)
