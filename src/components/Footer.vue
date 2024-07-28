<script lang="ts" setup>
import Discover from "@/components/icon/Discover.vue";
import Settings from "@/components/icon/Settings.vue";
import Messages from "@/components/icon/Messages.vue";
</script>

<template>
    <section
        class="absolute h-[88px] w-[429px] -translate-y-[4.3rem] -translate-x-6 border border-white border-opacity-10 bg-white bg-opacity-5 backdrop-blur-sm rounded-b-3xl"
    >
        <div class="flex items-center justify-center gap-16 py-4">
            <Discover />
            <Messages />
            <Settings />
        </div>
    </section>
</template>
