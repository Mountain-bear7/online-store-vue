import {createApp} from 'vue'
import App from './App.vue'
import shop from "@/shop-vuex/shop";
import router from "@/router/router";

createApp(App)
    .use(shop)
    .use(router)
    .mount('#app')
