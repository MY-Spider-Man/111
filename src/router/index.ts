import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      
      {
        path: '/home',
        name: 'home',
    
        component: () => import('../views/home.vue'),
        children:[
          {
            path: '/homepage',
            name: 'homepage',
        
            component: () => import('../views/homepage.vue')
          },
          {
            path: '/Album',
            name: 'Album',
        
            component: () => import('../views/Album.vue')
          },
        ]
      },
      {
        path: '/commodity',
        name: 'commodity',
    
        component: () => import('../views/commodity.vue')
      },
      {
        path: '/order',
        name: 'order',
    
        component: () => import('../views/order.vue')
      },
      {
        path: '/member',
        name: 'member',
    
        component: () => import('../views/member.vue')
      },
      {
        path: '/set',
        name: 'set',
    
        component: () => import('../views/set.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import('../views/login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if (!token && to.path != '/login') {
    next('/login')
  } else {
    if (token && to.path == '/login') {
      next('/')
    } else {
      next()
    }
  }
})
export default router
