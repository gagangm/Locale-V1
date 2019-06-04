import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import * as Vue2Leaflet from "vue2-leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

Vue.component("v-map", LMap);
Vue.component("v-tile-layer", LTileLayer);
Vue.component("v-marker", LMarker);
Vue.component("v-popup", LPopup);

Vue.config.productionTip = false;

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

Vue.use(Vue2Leaflet);
