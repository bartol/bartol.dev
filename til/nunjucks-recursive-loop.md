# Nunjucks recursive loop

_2020-04-24_

Nunjucks does not have recursive loop option by default but you can create it
using simple macro.

```html
{% macro link_to_file(file) %}
  <li>
    {% if file.children %}
      <strong>{{ file.name }}/</strong>
      <ul>
        {% for file in file.children %}
          {{ link_to_file(file) }}
        {% endfor %}
      </ul>
    {% else %}
    <a href="/{{ file.path }}" >{{ file.name }}</a>
    {% endif %}
  </li>
{% endmacro %}

<div class="tree">{{ link_to_file(files) }}</div>
```

[source](https://github.com/mozilla/nunjucks/issues/416#issuecomment-206335032)
