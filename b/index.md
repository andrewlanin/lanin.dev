---
layout: base
title: Andrew Lanin
---

# Andrew's Website

Hey! I'm Andrew Lanin, software developer interested in programming languages, development tools, engineering productivity and programms correctness.


## Recent posts

{% for post in site.posts %}

### {{ post.title }}

*{{ post.date | date: '%Y-%m-%d' }}*

{{ post.excerpt }}

[Read more...]({{ post.url }})

{% endfor %}
