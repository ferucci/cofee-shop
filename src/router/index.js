import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroView from '../views/HeroView'
import OurCoffeeView from '../views/OurCoffeeView'
import GoodsView from '../views/GoodsView'
import GoodsItemView from '../views/GoodsItemView'
import ContactsView from '../views/ContactsView'
import ThankYouView from '../views/ThankYouView'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HeroView },
  { path: '/our-coffee', component: OurCoffeeView },
  { path: '/goods-view', component: GoodsView },
  { path: '/contacts', component: ContactsView },
  { path: '/thanks', component: ThankYouView },
  { name: 'coffee', path: '/our-coffee/:id', component: GoodsItemView },
  { name: 'goods', path: '/goods-view/:id', component: GoodsItemView },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router