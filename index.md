---
layout: base
title: Home
---

# Welcome
I'm Andrew Lanin (rus. Андрей Ланин), software engineer from Russia, interested in development tools, machine languages, programmers' productivity techniques, entrepreneurship, learning meaningful stuff and teaching others.

## Journal
Journal is a collection of quick notes on books, movies, music and other things that I've experienced and decided to remember.

{% for post in site.categories["journal"] %}
{{ post.date | date: '%Y-%m-%d' }} [{{ post.title }}]({{ post.url }}) {% for tag in post.tags %} *{{tag}}* {% endfor %}
{% endfor %}
