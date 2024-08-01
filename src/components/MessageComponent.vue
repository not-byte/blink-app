<script lang="ts" setup>
const props = defineProps<{
    sender: string;
    message: string;
}>();
</script>

<template>
    <aside class="w-full h-fit flex flex-col items-end gap-2">
        <template v-if="props.sender === `You`">
            <p class="w-full flex justify-end gap-3 text-sm text-lavender">
                <span>{{ props.sender }}</span>
                <span>22:35</span>
            </p>
            <p
                class="px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
                {{ message }}
            </p>
        </template>
        <template v-else>
            <p class="w-full flex justify-between gap-3 text-sm text-lavender">
                <span>{{ props.sender }}</span>
                <span>22:35</span>
            </p>
            <p
                class="px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
                {{ message }}
            </p>
        </template>
    </aside>
</template>
