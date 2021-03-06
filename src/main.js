import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import vuescroll from "vuescroll";

Vue.use(vuescroll, {
  ops: {},
  name: "myScroll",
});

Vue.prototype.$vuescrollConfig = {
  bar: {
    background: "#000",
    keepShow: true,
    size: "6px",
    minSize: 0.3,
  },
};

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
