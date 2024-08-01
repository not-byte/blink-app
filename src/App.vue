<script lang="ts" setup>
import { RouterView } from "vue-router";
</script>

<template>
    <main
        class="relative w-[28rem] h-[63rem] aspect-[4/9] p-9 rounded-3xl overflow-clip bg-base bg-center bg-cover border border-white/10"
    >
        <router-view v-slot="{ Component }">
            <transition mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </main>
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
