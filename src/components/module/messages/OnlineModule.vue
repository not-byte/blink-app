<script lang="ts" setup>
const users = [
    {
        avatar: "https://cdn.yshop.pl/files/erVOv.png",
    },
    {
        avatar: "https://cdn.yshop.pl/files/U4CW8.png",
    },
    {
        avatar: "https://cdn.yshop.pl/files/aUgnZ.png",
    },
    {
        avatar: "https://cdn.yshop.pl/files/9mAF7.png",
    },
    {
        avatar: "https://cdn.yshop.pl/files/O65hK.png",
    },
    {
        avatar: "https://cdn.yshop.pl/files/erVOv.png",
    },
    {
        avatar: "https://cdn.yshop.pl/files/U4CW8.png",
    },
    {
        avatar: "https://cdn.yshop.pl/files/aUgnZ.png",
    },
    {
        avatar: "https://cdn.yshop.pl/files/9mAF7.png",
    },
    {
        avatar: "https://cdn.yshop.pl/files/O65hK.png",
    },
];
</script>

<template>
    <section class="flex flex-col gap-3">
        <h2 class="text-2xl font-semibold">Online</h2>
        <aside class="flex gap-3 overflow-x-hidden no-scrollbar">
            <img
                v-for="user in users"
                :key="user.avatar"
                :alt="user.avatar"
                :src="user.avatar"
                class="w-[64px] h-[64px] rounded-2xl border border-white border-opacity-5"
            />
        </aside>
    </section>
</template>
