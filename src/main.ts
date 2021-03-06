import { Vue } from "vue-demi";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { App } from "./App";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
