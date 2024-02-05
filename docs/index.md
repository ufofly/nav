---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 茂茂的
  text: 前端导航模板
  tagline: 基于 VitePress 的个人前端导航页面模板
  image:
    src: /logo.png
    alt: 茂茂物语
  actions:
    - text: 茂茂物语
      link: https://notes.fe-mm.com
    - text: 前端导航
      link: /nav/
      theme: alt
    - text: mmPlayer
      link: https://netease-music.fe-mm.com
    - text: 测试页
      link: /test
      theme: alt

---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
