import Vuex from 'vuex';
import Vue from '../../node_modules/vue';
import * as getters from './getters';
import users from './modlues/users';
Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  modules: {
    users,
  },
  strict: false,
})