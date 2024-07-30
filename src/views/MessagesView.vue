<script lang="ts" setup>
import OnlineModule from "@/components/module/messages/OnlineModule.vue";
import RecentChatsModule from "@/components/module/messages/RecentChatsModule.vue";
import HeaderModule from "@/components/module/messages/HeaderModule.vue";
import SearchBarModule from "@/components/module/SearchBarModule.vue";

import DayTime from "@/types/dayTime";
import Language from "@/types/language";
import Status from "@/types/status";
import Theme from "@/types/theme";

const getTitle = (): string => {
    const hours: number = new Date().getHours();

    switch (true) {
        case hours > 5 && hours < 12:
            return `${DayTime.Morning}`;
        case hours > 11 && hours < 17:
            return `${DayTime.Afternoon}`;
        case hours > 17 && hours < 22:
            return `${DayTime.Evening}`;
        default:
            return `${DayTime.Night}`;
    }
};

const user: User = {
    principal: null,
    username: "essiarz",
    avatar: "http://localhost:8080/test.jpg",
    language: Language.Polish,
    theme: Theme.Dark,
    status: Status.Online,
};
</script>

<template>
    <HeaderModule :name="user.username" :title="`Good ${getTitle()}`" />
    <SearchBarModule />
    <OnlineModule />
    <RecentChatsModule />
</template>
