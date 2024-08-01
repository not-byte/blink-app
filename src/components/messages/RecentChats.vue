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
];
</script>

<template>
    <h2 class="text-2xl font-semibold">Recent chats</h2>
    <section
        class="flex flex-col gap-5 rounded-xl overflow-y-scroll no-scrollbar"
    >
        <article class="grid gap-3">
            <RouterLink
                v-for="user in users"
                :key="user.fullname"
                :to="`/chat/${user.fullname}`"
                class="w-full h-fit flex gap-3"
            >
                <img :src="user.avatar" alt="" class="h-14 aspect-square" />
                <section class="w-full h-full flex flex-col">
                    <h2 class="font-semibold text-lg">{{ user.fullname }}</h2>
                    <p>{{ user.message }}</p>
                </section>
                <section class="h-full flex">
                    <p>{{ user.sent }}</p>
                </section>
            </RouterLink>
        </article>
    </section>
</template>
