import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./router";
import { BootstrapVue } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { CometChat } from "@cometchat-pro/chat";
import { COMETCHAT_CONSTANTS } from "./CONSTS";
import Sidebar from "@/components/Sidebar/Sidebar";
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
import VueHorizontal from "vue-horizontal";
Vue.component('vue-sidebar-menu-akahon', VueSidebarMenuAkahon);
Vue.component(VueHorizontal)

Vue.config.productionTip = false;

var appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .build();

CometChat.init(COMETCHAT_CONSTANTS.APP_ID, appSetting).then(() => {
  Vue.use(VueRouter);
  Vue.use(BootstrapVue);
  Vue.use(Sidebar)
  const router = new VueRouter({ routes });
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
});
