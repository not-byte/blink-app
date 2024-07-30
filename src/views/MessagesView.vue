<script lang="ts" setup>
import OnlineModule from "@/components/module/OnlineModule.vue";
import RecentChatsModule from "@/components/module/RecentChatsModule.vue";
import HeaderModule from "@/components/module/HeaderModule.vue";
import SearchBarModule from "@/components/module/SearchBarModule.vue";

enum Language {
    Polish,
    English,
}

enum Theme {
    Dark,
    Light,
    System,
}

enum Status {
    Online,
    Away,
    DoNotDisturb,
    Offline,
}

interface User {
    principal: any2;
    username: String;
    password: String;
    avatar: String;
    language: Language;
    theme: Theme;
    status: Status;
}

const user: User = {
    principal: null,
    username: "essiarz",
    password: "Test123",
    avatar: "http://localhost:8080/test.jpg",
    language: Language.Polish,
    theme: Theme.Dark,
    status: Status.Online,
};
</script>

<template>
    <HeaderModule :name="user.username" title="Good morning! ⛅" />
    <SearchBarModule />
    <OnlineModule />
    <RecentChatsModule />
</template>
