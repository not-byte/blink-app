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
        <h2 class="text-[4rem] lg:text-2xl font-semibold">Online</h2>
        <aside
            class="flex gap-8 lg:gap-[0.85rem] rounded-xl overflow-x-scroll no-scrollbar"
        >
            <img
                v-for="user in users"
                :key="user.avatar"
                :alt="user.avatar"
                :src="user.avatar"
                class="h-[9.6rem] lg:h-16 aspect-square rounded-[3rem] lg:rounded-2xl border-2 lg:border border-smoke/10"
            />
        </aside>
    </section>
</template>
