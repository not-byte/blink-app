import { createRouter, createWebHistory } from "vue-router";
import IndexView from "@/views/IndexView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Blink",
            component: IndexView,
        },
        {
            path: "/discover",
            name: "Discover",
            component: () => import("@/views/DiscoverView.vue"),
        },
        {
            path: "/messages",
            name: "Messages",
            component: () => import("@/views/MessagesView.vue"),
        },
        {
            path: "/messages/:reciever_id",
            name: "Chat with user",
            component: () => import("@/views/ChatView.vue"),
        },
        {
            path: "/settings",
            name: "Settings",
            component: () => import("@/views/SettingsView.vue"),
        },
    ],
});

export default router;
