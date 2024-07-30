<script lang="ts" setup>
const users = [
    {
        fullname: "Eric Johnson",
        avatar: "https://cdn.yshop.pl/files/udvzd.png",
        message: "(You) hi Eric! how are you? I...",
        read: false,
        sent: "19:32",
    },
    {
        fullname: "Matilda Young",
        avatar: "https://cdn.yshop.pl/files/AB8MA.png",
        message: "What's up? I hope everythin...",
        read: false,
        sent: "15:16",
    },
    {
        fullname: "Janine Taylor",
        avatar: "https://cdn.yshop.pl/files/3BUMe.png",
        message: "they are the default ones th...",
        read: false,
        sent: "13:39",
    },
    {
        fullname: "Brandon Williams",
        avatar: "https://cdn.yshop.pl/files/ypQSb.png",
        message: "Let me know what's new wi...",
        read: false,
        sent: "10:11",
    },
    {
        fullname: "Jason Parker",
        avatar: "https://cdn.yshop.pl/files/jx31Q.png",
        message: "(You) yea i might do that at...",
        read: false,
        sent: "21:23",
    },
    {
        fullname: "Marceline Davis",
        avatar: "https://cdn.yshop.pl/files/X2SXZ.png",
        message: "you can only use it to gener...",
        read: false,
        sent: "17:06",
    },
    {
        fullname: "Eric Johnson",
        avatar: "https://cdn.yshop.pl/files/udvzd.png",
        message: "(You) hi Eric! how are you? I...",
        read: false,
        sent: "19:32",
    },
    {
        fullname: "Matilda Young",
        avatar: "https://cdn.yshop.pl/files/AB8MA.png",
        message: "What's up? I hope everythin...",
        read: false,
        sent: "15:16",
    },
    {
        fullname: "Janine Taylor",
        avatar: "https://cdn.yshop.pl/files/3BUMe.png",
        message: "they are the default ones th...",
        read: false,
        sent: "13:39",
    },
    {
        fullname: "Brandon Williams",
        avatar: "https://cdn.yshop.pl/files/ypQSb.png",
        message: "Let me know what's new wi...",
        read: false,
        sent: "10:11",
    },
    {
        fullname: "Jason Parker",
        avatar: "https://cdn.yshop.pl/files/jx31Q.png",
        message: "(You) yea i might do that at...",
        read: false,
        sent: "21:23",
    },
    {
        fullname: "Marceline Davis",
        avatar: "https://cdn.yshop.pl/files/X2SXZ.png",
        message: "you can only use it to gener...",
        read: false,
        sent: "17:06",
    },
];
</script>

<template>
    <section class="w-full flex flex-col gap-3">
        <h2 class="text-2xl font-semibold">Recent chats</h2>
        <article class="overflow-visible">
            <aside
                v-for="user in users"
                :key="user.fullname"
                class="w-full h-fit flex justify-between"
            >
                <img :src="user.avatar" alt="" class="h-[64px] w-[64px]" />
                <div class="p-2 px-4">
                    <h2 class="font-semibold text-xl">{{ user.fullname }}</h2>
                    <p>{{ user.message }}</p>
                </div>
                <div class="py-2">
                    <p>{{ user.sent }}</p>
                </div>
            </aside>
        </article>
    </section>
</template>
