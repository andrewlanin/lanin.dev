---
layout: base
title: Andrew Lanin
---

# Andrew's Blog

## All posts

{% for post in site.posts %}
{{ post.date | date: '%Y-%m-%d' }} [{{ post.title }}]({{ post.url }}) {% for tag in post.tags %}*{{ tag }}* {% endfor %}
{% endfor %}
