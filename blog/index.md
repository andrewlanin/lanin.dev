---
layout: base
title: Andrew Lanin
---

# Andrew's Blog

This blog is an attempt to bring some order to thoughts and explore own dissatisfaction with state of things in the industry of software development.

## All posts

{% for post in site.posts %}
{{ post.date | date: '%Y-%m-%d' }} [{{ post.title }}]({{ post.url }}) {% for tag in post.tags %}*{{ tag }}* {% endfor %}
{% endfor %}
