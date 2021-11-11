import { createApp } from "vue";
import App from "@/App.vue";
{{#router}}
import router from "./router/index";
{{/router}}
{{#store}}
import store from "./store/index";
{{/store}}
{{#vant}}
import installVant from "./plugins/vant";
{{/vant}}
const app = createApp(App);
{{#vant}}
installVant(app);
{{/vant}}
app.
{{#router}}
use(router)
{{/router}}
{{#store}}
.use(store)
{{/store}}
.mount("#app");
