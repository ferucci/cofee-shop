import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroView from '../views/HeroView'
import OurCoffeeView from '../views/OurCoffeeView'
import GoodsView from '../views/GoodsView'
import ContactsView from '../views/ContactsView'
import GratitudePageView from '../views/GratitudePageView'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HeroView },
  { path: '/our-coffee', component: OurCoffeeView },
  { path: '/goods-view', component: GoodsView },
  { path: '/contacts', component: ContactsView },
  { path: '/thanks', component: GratitudePageView },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router