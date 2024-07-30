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
        {
            path: "/settings",
            name: "Settings",
            component: () => import("@/views/SettingsView.vue"),
        },
        {
            path: "/:reciever_id",
            name: "Conversation",
            component: () => import("@/views/ConversationView.vue"),
        },
    ],
});

export default router;
