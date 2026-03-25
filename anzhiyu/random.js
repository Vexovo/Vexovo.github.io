var posts=["2026/03/25/001-Hexo-安装/","2026/03/25/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };