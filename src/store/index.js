import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

export default () => {
  Vue.use(Vuex);

  return new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
  });
};
