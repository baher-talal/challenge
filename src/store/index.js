import Vue from "vue";
import Vuex from "vuex";
import * as event from "@/store/modules/event.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    event,
  },
});
