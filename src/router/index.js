import Vue from 'vue'
import VueRouter from 'vue-router'
import GMap from '../components/home/GMap.vue'
import Signup from '../components/auth/Signup.vue'
import Login from '@/components/auth/Login'
import firebase from 'firebase/app'
import ViewProfile from '@/components/profile/ViewProfile'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
      meta: {
        requiresAuth: true
      }
    },
     {
      path: '/profile/:id',
      name: 'ViewProfile',
      component: ViewProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
    

 router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    let user = firebase.auth().currentUser
    if (user) {
      next()
    } else {
      next({ name:'Login'})
    } 
  } else {
    next()
  }
})

export default router