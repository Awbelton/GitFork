import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/main',
      name: 'main',
      component: () => import('../components/Main.vue')
    },
    {
      path: '/repos',
      name: 'results',
      component: () => import('../components/Results.vue')
    },
    {
      path: '/repos/:id',
      name: 'repo-detail',
      component: () => import('../components/RepoDetail.vue')
    }
  ]
})
