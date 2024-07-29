<script lang="ts" setup>
import OnlineModule from "@/components/module/OnlineModule.vue";
import RecentChatsModule from "@/components/module/RecentChatsModule.vue";
import HeaderModule from "@/components/module/HeaderModule.vue";
import SearchBarModule from "@/components/module/SearchBarModule.vue";
</script>

<template>
    <HeaderModule name="Henry" title="Good morning! ⛅" />
    <SearchBarModule />
    <OnlineModule />
    <RecentChatsModule />
</template>
