var posts=["2026/03/25/001_Hexo-安装/","2026/03/26/002_Windows 系统激活/","2026/03/30/004-APK-安装包/","2026/03/26/003_KOF 15 八神庵/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };