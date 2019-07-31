---
layout: base
title: Home
---

# Welcome
I'm Andrew Lanin (rus. Андрей Ланин), software engineer from Russia, interested in machine languages, development tools, engineering productivity and programms correctness.

## Blog
{% for post in site.categories["blog"] %}
{{ post.date | date: '%Y-%m-%d' }} [{{ post.title }}]({{ post.url }})
{% endfor %}

## Journal
Journal is a collection of quick notes on books, movies, music and other things that I've experienced and decided to remember.

{% for post in site.categories["journal"] %}
{{ post.date | date: '%Y-%m-%d' }} [{{ post.title }}]({{ post.url }})
{% endfor %}
