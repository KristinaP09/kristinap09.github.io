---
layout: default
---

<div class="Archived Nonsense">
  {% for post in site.posts %}
    <article class="Archived Nonsense">    
      
      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

      <div class="entry">
        {{ post.content | strip_html | truncatewords:40}}
      </div>
       
      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
  {% endfor %}
</div>
