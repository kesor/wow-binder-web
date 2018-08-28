import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    chosenKlass: '',
    chosenSpec: '',
  },
  getters: {
    chosenKlass(state, getters): string {
      return state.chosenKlass;
    },
    chosenSpec(state, getters): string {
      return state.chosenSpec;
    },
  },
  mutations: {
    chooseKlass(state, klassName) {
      state.chosenKlass = klassName;
    },
    chooseSpec(state, specName) {
      state.chosenSpec = specName;
    },
  },
});

Vue.prototype.$http = axios;

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');
