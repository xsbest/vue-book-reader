import Vue from 'vue'
import Vuex from 'vuex'
import book from '../store/modules/book'
import getters from '@/store/getters'
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    book
  },

  getters

})
