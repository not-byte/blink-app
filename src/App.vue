<script lang="ts" setup>
import NavigationBar from "@/components/navigation/NavigationBar.vue";

import { RouterView } from "vue-router";
</script>

<template>
    <main
        class="relative aspect-[5/10] w-[28rem] 3xl:aspect-[4/9] flex flex-col items-center gap-6 p-9 rounded-3xl overflow-hidden bg-background bg-center bg-cover border border-white/10"
    >
        <RouterView />
        <NavigationBar />
    </main>
</template>
