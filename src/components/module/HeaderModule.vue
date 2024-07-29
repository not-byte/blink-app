<script lang="ts" setup>
defineProps<{
    title: string;
    name: string;
}>();
</script>

<template>
    <header class="w-full">
        <h3 class="font-normal">
            {{ title }}
            <br />
            <span class="text-4xl font-semibold">{{ name }}</span>
        </h3>
    </header>
</template>
