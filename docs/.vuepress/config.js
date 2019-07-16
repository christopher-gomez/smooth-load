module.exports = {
   base: '/smooth-load/',
   title: 'Smooth Load',
   description: 'A GSAP powered, spinner component for Vue.js. Pretty and silky smooth.',
   head: [
      ['link', { rel: 'icon', href: '/hero.png' }]
   ],
   themeConfig: {
      search: false,
      logo: '/hero.png',
      nav: [
         { text: 'Home', link: '/' },
         { text: 'Docs', link: '/introduction/guide' },
         { text: 'Github', link: 'https://github.com/christophgomez/smooth-load' },
      ],
      sidebar: [
         {
            title: 'Introduction',
            collapsable: false,
            children: [
               'introduction/guide'
            ]
         },
         {
            title: 'Usage',
            collapsable: false,
            children: [
               'components/smooth-load'
            ]
         }
      ]
   },
   markdown: {
      lineNumbers: true
   },
}
