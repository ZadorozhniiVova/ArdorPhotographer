import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import routes from "@/router/index.js";
import store from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import vuetify from "./plugins/vuetify";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import EasySlider from "vue-easy-slider";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(EasySlider);
Vue.use(Buefy);
Vue.use(Vuetify);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  routes,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
