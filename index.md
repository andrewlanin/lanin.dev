---
layout: base
title: Andrew Lanin
---

# Andrew's website

Hey! I'm Andrew Lanin, software developer interested in machine languages, development tools, engineering productivity and programms correctness.

## Recent posts

{% for post in site.posts limit: 5 %}
{{ post.date | date: '%Y-%m-%d' }} [{{ post.title }}]({{ post.url }}) {% for tag in post.tags %}*{{ tag }}* {% endfor %}
{% endfor %}
