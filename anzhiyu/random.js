var posts=["2024/10/17/hello-world/","2024/10/20/C/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };