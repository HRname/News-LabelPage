import { createRouter, createWebHistory } from 'vue-router'
import SearchBox from '@/views/HomePage/index.vue'
import SearchHome from '@/views/HomePage/components/SearchHome.vue'
import SearchWork from '@/views/HomePage/components/SearchWork.vue'
import SearchTool from '@/views/HomePage/components/SearchTool.vue'
import SearchCollect from '@/views/HomePage/components/SearchCollect.vue'
import SearchPlay from '@/views/HomePage/components/SearchPlay.vue'
import Setting from '@/views/Setting/index.vue'

import Login from '@/views/Login/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'searchBox',
      redirect: 'searchHome',
      component: SearchBox,
      children:[
        {
          path: 'searchHome',
          name: 'searchHome',
          component: SearchHome
        },
        {
          path: 'searchWork',
          name: 'searchWork',
          component: SearchWork
        },
        {
          path: 'searchTool',
          name: 'searchTool',
          component: SearchTool
        },
        {
          path: 'searchCollect',
          name: 'searchCollect',
          component: SearchCollect
        },
        {
          path: 'searchPlay',
          name: 'searchPlay',
          component: SearchPlay
        },
        {
          path: 'setting',
          name: 'setting',
          component: Setting
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
