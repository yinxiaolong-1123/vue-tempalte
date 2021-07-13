import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import example from "./modules/example";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    example,
  },
  getters,
});
