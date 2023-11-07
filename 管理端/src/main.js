import Vue from "vue";

import Cookies from "js-cookie";

import "normalize.css/normalize.css"; // a modern alternative to CSS resets

import Element from "element-ui";
import "element-ui/lib/theme-chalk/display.css";
import "element-ui/lib/theme-chalk/index.css";

import supportIE from "./utils/support"; // IE placeholder兼容指令

import "@/styles/index.scss"; // global css

import App from "./App";
import store from "./store";
import router from "./router";

import i18n from "./lang"; // internationalization
import "./icons"; // icon
// import './permission' // permission control
import "./utils/error-log"; // error log
import print from "./utils/printjd";
Vue.use(print);

Vue.use(Element, {
  size: "small"
});
import htmlToPdf from "@/utils/exportPdf";

Vue.use(htmlToPdf);

Vue.use(supportIE);

import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
Vue.use(Viewer);
Viewer.setDefaults({
  Options: {
    inline: true,
    button: true,
    navbar: true,
    title: true,
    toolbar: true,
    tooltip: true,
    movable: true,
    zoomable: true,
    rotatable: true,
    // "scalable": true,
    transition: true,
    fullscreen: true,
    keyboard: true,
    url: "data-source"
  }
});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  i18n,
  render: h => h(App)
});
