import "@/assets/css/tailwind.css";

import App from "@/App.vue";
import router from "@/router";

import { createApp } from "vue";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).use(router).mount("body");
