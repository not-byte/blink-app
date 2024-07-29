<script lang="ts" setup>
import DiscoverIcon from "@/components/icon/DiscoverIcon.vue";
import SettingsIcon from "@/components/icon/SettingsIcon.vue";
import MessagesIcon from "@/components/icon/MessagesIcon.vue";
</script>

<template>
    <aside
        class="absolute bottom-0 w-full bg-white/5 backdrop-blur-sm border-t border-t-white/10"
    >
        <ul class="grid grid-flow-col place-content-center gap-8">
            <li class="p-4">
                <DiscoverIcon />
            </li>
            <li class="p-4">
                <MessagesIcon :active="true" />
            </li>
            <li class="p-4">
                <SettingsIcon />
            </li>
        </ul>
    </aside>
</template>
