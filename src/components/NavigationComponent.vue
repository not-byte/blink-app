<script lang="ts" setup>
import DiscoverIcon from "@/components/icon/DiscoverIcon.vue";
import SettingsIcon from "@/components/icon/SettingsIcon.vue";
import MessagesIcon from "@/components/icon/MessagesIcon.vue";
</script>

<template>
    <aside
        class="absolute bottom-0 left-0 right-0 w-full bg-white/5 backdrop-blur-sm border-t border-t-white/10"
    >
        <ul class="grid grid-flow-col place-content-center gap-8">
            <li class="p-4">
                <!--                <RouterLink to="/discover">-->
                <DiscoverIcon />
                <!--                </RouterLink>-->
            </li>
            <li class="p-4">
                <RouterLink to="/messages">
                    <MessagesIcon />
                </RouterLink>
            </li>
            <li class="p-4">
                <!--                <RouterLink to="/settings">-->
                <SettingsIcon />
                <!--                </RouterLink>-->
            </li>
        </ul>
    </aside>
</template>
