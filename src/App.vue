<script lang="ts" setup>
import NavigationBar from "@/components/navigation/NavigationBar.vue";

import { RouterView } from "vue-router";
</script>

<template>
    <main
        class="relative max-x-[200px] max-h-[960px] flex flex-col items-center gap-6 p-9 rounded-3xl overflow-hidden bg-background bg-center bg-cover border border-white/10"
    >
        <RouterView />
        <NavigationBar />
    </main>
</template>
