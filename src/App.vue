<script lang="ts" setup>
import NavigationComponent from "@/components/NavigationComponent.vue";
import { RouterView, useRoute } from "vue-router";
</script>

<template>
    <TransitionGroup
        class="relative w-[100dvw] h-[100dvh] lg:w-[28rem] lg:h-[58rem] lg:aspect-[4/9] lg:rounded-3xl p-9 overflow-clip bg-base bg-center bg-cover border-0 lg:border border-smoke/10"
        tag="main"
    >
        <RouterView key="view" />
        <NavigationComponent
            v-if="useRoute().fullPath !== `/`"
            key="navigation"
        />
    </TransitionGroup>
</template>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 700ms ease-in-out;
}

.v-enter-active {
    transition-delay: 350ms;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
