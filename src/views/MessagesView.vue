<script lang="ts" setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import OnlineUsers from "@/components/messages/OnlineUsers.vue";
import RecentChats from "@/components/messages/RecentChats.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";
import dayTimeTitle from "@/utils/dayTimeTitle";
</script>

<template>
    <section class="w-full h-full flex flex-col gap-6 transition-root">
        <HeaderComponent :title="`Good ${dayTimeTitle()}`" />
        <SearchComponent />
        <OnlineUsers />
        <RecentChats />
        <NavigationComponent />
    </section>
</template>
