<script lang="ts" setup>
import LogoIcon from "@/components/icon/LogoIcon.vue";
</script>

<template>
    <section class="w-full h-full flex flex-col gap-6 transition-root">
        <section
            class="w-full h-full flex-grow flex flex-col items-center justify-center gap-3 text-center"
        >
            <LogoIcon class="w-[36rem] mb-[4rem] lg:w-80 lg:mb-16" />
            <h3 class="text-[8rem] lg:text-4xl font-semibold">BLINK</h3>
            <p class="text-[2rem] lg:text-base">Decentralized Communicator</p>
        </section>
        <router-link
            class="text-[2rem] lg:text-base w-full h-fit px-9 py-6 lg:px-5 lg:py-3 bg-smoke/5 backdrop-blur-sm border-2 lg:border border-smoke/10 rounded-2xl text-center"
            to="/chat"
        >
            Join now
        </router-link>
    </section>
</template>
