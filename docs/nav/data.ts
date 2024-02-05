import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '只有同行之间才是赤裸裸的仇恨',
    items: [
      {
        icon: '🤣',
        title: '星际黑客',
        link: 'https://xj.hk/',
      },
      {
        icon: '👌',
        title: '渗透师',
        link: 'https://www.shentoushi.top/',
      },
      {
        icon: '🐛',
        title: 'ctf导航',
        desc: 'iot',
        link: 'https://www.ctfiot.com/',
      },
      {
        icon: 'https://dh.aabyss.cn/favicon.ico',
        title: '渊龙sec安全团队',
        desc: '',
        link: 'https://dh.aabyss.cn/',
      },
      {
        icon: '/icons/json-cn.ico',
        title: '极牛导航',
        desc: '',
        link: 'https://hao.geeknb.com/',
      },
    ],
  },
  {
    title: 'AI 导航',
    items: [
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT（最强）',
        link: 'https://chat.openai.com/chat',
      },
      {
        icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'Notion AI（笔记）',
        link: 'https://www.notion.so',
      },
     
    ],
  },
  
  
  
]
