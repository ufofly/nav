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
        link: 'https://www.ctfiot.com/',
      },
      {
        icon: 'https://dh.aabyss.cn/favicon.ico',
        title: '渊龙sec安全团队',
        link: 'https://dh.aabyss.cn/',
      },
      {
        icon: '',
        title: '极牛导航',
        link: 'https://hao.geeknb.com/',
      },
    ],
  },
  {
    title: '安全团队博客',
    items: [
      {
        icon: 'https://blog.xlab.qianxin.com/content/images/size/w256h256/2023/10/xlab-icon-1.png',
        title: '奇安信X实验室',
        link: 'https://blog.xlab.qianxin.com/',
      },
      {
        icon: 'https://blog.netlab.360.com/content/images/size/w256h256/2019/02/netlab_xs-2.png',
        title: '360netlab实验室',
        link: 'https://blog.netlab.360.com/',
      },
      {
        icon:'https://www.trendmicro.com/content/dam/trendmicro/favicon.ico',
        title:'趋势科技',
        link: 'https://www.trendmicro.com/en_us/research.html',
      },
      {
        icon: 'https://paper.seebug.org/static/images/favicon.ico',
        title: 'Seebug',
        link: 'https://paper.seebug.org/',
      },
     
    ],
  },
  
  
  
]
