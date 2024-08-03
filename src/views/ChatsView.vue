<script lang="ts" setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import OnlineUsers from "@/components/chats/OnlineUsers.vue";
import RecentChats from "@/components/chats/RecentChats.vue";
import dayTimeTitle from "@/utils/dayTimeTitle";
</script>

<template>
    <section
        class="w-full h-full flex flex-col gap-6 transition-root pb-[12rem] lg:pb-12"
    >
        <HeaderComponent :title="`Good ${dayTimeTitle()}`" />
        <SearchComponent />
        <OnlineUsers />
        <RecentChats />
    </section>
</template>
