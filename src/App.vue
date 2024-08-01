<script lang="ts" setup>
import NavigationComponent from "@/components/NavigationComponent.vue";
import { RouterView, useRoute } from "vue-router";
</script>

<template>
    <TransitionGroup
        class="relative w-[28rem] h-[58rem] 3xl:h-[63rem] aspect-[4/9] p-9 rounded-3xl overflow-clip bg-base bg-center bg-cover border border-white/10"
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
