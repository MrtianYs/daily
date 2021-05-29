module.exports = {
  base: '/dist/',
  title: 'Yasimola',
  description: '',
  head: [
    ['link', { rel: 'icon', href: '/Capricornus.png' }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: '工具',
        children: [
          {
            title: 'npm包大小查询',
            path: 'http://wangzaixst.com/npm'
          }
        ]
      },
      {
        title: 'VIP影视解析',
        path: '/video/'
      },
      {
        title: 'NPS内网穿透',
        path: 'http://tiany.wangzaixst.com/'
      },
      {
        title: 'ETH挖矿教程',
        path: '/eth/'
      },
      {
        title: 'Swarm BZZ教程',
        path: '/bzz/'
      }
    ],
    smoothScroll: true
  }
}