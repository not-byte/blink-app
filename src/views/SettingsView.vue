<script lang="ts" setup>
import HeaderModule from "@/components/HeaderComponent.vue";
import SearchBarModule from "@/components/SearchComponent.vue";
import Setting from "@/components/settings/Setting.vue";

const settings = {
    general: {
        name: "General",
        children: ["Your profile", "Online status", "Language", "Theme"],
    },
    privacy: {
        name: "Privacy",
        children: ["Blocked users", "Profile visibility"],
    },
    security: {
        name: "Security",
        children: [
            "Multi-factor authentication",
            "Your devices",
            "Account recovery",
            "Profile visibility",
        ],
    },
    notifications: {
        name: "Notifications",
        children: ["Do not disturb Mode", "Notifications sound", "Vibrations"],
    },
    about: {
        name: "About",
        children: ["Terms of Service", "Privacy Policy", "App version"],
    },
    advanced: {
        name: "Advanced",
        children: ["Developer Mode", "Diagnostics data"],
    },
};
</script>

<template>
    <HeaderModule title="Settings" />
    <SearchBarModule />
    <h1 class="w-full text-2xl text-center font-semibold">
        ⚠️ Feature disabled ⚠️
    </h1>
    <Setting
        v-for="{ name, children } in settings"
        :children="children"
        :name="name"
    />
</template>
