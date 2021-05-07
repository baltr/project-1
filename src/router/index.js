import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RoomDetails from '../views/details/RoomDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:name/:id',
    name: 'details',
    component: RoomDetails,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
