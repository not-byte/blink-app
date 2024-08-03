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
            path: "/chat",
            name: "Chats",
            component: () => import("@/views/ChatsView.vue"),
        },
        {
            path: "/chat/:reciever_id",
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
