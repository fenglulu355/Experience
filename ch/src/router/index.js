import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home.vue'
import news from '../pages/news.vue'
import newsdetail from '../pages/news-detail.vue'
import detail from '../pages/details.vue'
import contact from '../pages/contact.vue'
import cases from '../pages/cases.vue'
import product from '../pages/product.vue'
import about from '../pages/about.vue'
import cs from '../pages/cd.vue'
import searchs from '../pages/search.vue'
import search from '../components/search-child.vue'
import honor from '../components/about-Honor.vue'
import organize from '../components/about-organize.vue'
import timeline from '../components/about-timeline.vue'
import idea from '../components/about-ldea.vue'
import intruduece from '../components/about-intru.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history', //去除路由的#
  routes: [{
      path: '/about',
      component: about,
      children: [{
          path: '/',
          name: 'intruduece',
          component: intruduece
        },
        {
          path: 'honor',
          name: 'honor',
          component: honor
        },
        {
          path: 'idea',
          name: 'idea',
          component: idea
        },
        {
          path: 'organize',
          name: 'organize',
          component: organize
        },
        {
          path: 'timeline',
          name: 'timeline',
          component: timeline
        }
      ]
    }, {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/cs',
      name: 'cs',
      component: cs
    },
    {
      path: '/searchs',
      component: searchs,
      children: [{
        path: '/',
        name: 'search',
        component: search
      }, ]
    },
    // {
    //   path: '/news',
    //   name: 'news',
    //   component: news
    // },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/newsdetail',
      name: 'newsdetail',
      component: newsdetail
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/cases',
      name: 'cases',
      component: cases
    }
  ]
})
