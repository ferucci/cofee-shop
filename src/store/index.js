import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import cards from "./cards";
import goodsCards from "./goods-cards";
import bestsellers from "./bestsellers-cards";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    links,
    cards,
    goodsCards,
    bestsellers
  }
})

export default store