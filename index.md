---
layout: base
title: Home
---

# Welcome
I'm Andrew Lanin (rus. Андрей Ланин), software engineer from Russia, interested in machine languages, development tools, engineering productivity and programms correctness.

## My Blog

{% for post in site.posts %}
{{ post.date | date: '%Y-%m-%d' }} [{{ post.title }}]({{ post.url }})
{% endfor %}
