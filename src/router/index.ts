import { createRouter, createWebHistory } from "vue-router";
import MessagesView from "../views/MessagesView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Messages",
            component: MessagesView,
        },
    ],
});

export default router;
