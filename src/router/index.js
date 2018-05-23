import Vue from 'vue'
import Router from 'vue-router'
const index = r => require.ensure([], () => r(require('../page/index.vue')), 'flhs')
const develop = r => require.ensure([], () => r(require('../page/develop.vue')), 'flhs')
const service = r => require.ensure([], () => r(require('../page/service.vue')), 'flhs')
const planning = r => require.ensure([], () => r(require('../page/planning.vue')), 'flhs')
const contact = r => require.ensure([], () => r(require('../page/contactUs.vue')), 'flhs1')
const profile = r => require.ensure([], () => r(require('../page/profile.vue')), 'flhs1')
const news = r => require.ensure([], () => r(require('../page/news.vue')), 'flhs1')
const newsDetail = r => require.ensure([], () => r(require('../page/newsDetail.vue')), 'flhs1')

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      meta: {
        title: '风林火山'
      },
      name: 'index',
      component: index
    },
    {
      path: '/develop',
      meta: {
        title: '企业发展'
      },
      name: 'develop',
      component: develop
    },
    {
      path: '/service',
      meta: {
        title: '业务服务'
      },
      name: 'service',
      component: service
    },
    {
      path: '/planning',
      meta: {
        title: '业务规划与策略'
      },
      name: 'planning',
      component: planning
    },
    {
      path: '/contactUs',
      meta: {
        title: '联系我们'
      },
      name: 'contact',
      component: contact
    },
    {
      path: '/profile',
      meta: {
        title: '企业概况'
      },
      name: 'profile',
      component: profile
    },
    {
      path: '/news',
      meta: {
        title: '新闻资讯'
      },
      name: 'news',
      component: news
    },
    {
      path: '/newsDetail',
      meta: {
        title: '新闻详情'
      },
      name: 'newsDetail',
      component: newsDetail
    }
  ]
})
