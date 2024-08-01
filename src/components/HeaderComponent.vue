<script lang="ts" setup>
defineProps<{
    title: string;
}>();
</script>

<template>
    <header class="w-full">
        <h3 class="text-4xl font-semibold">
            {{ title }}
        </h3>
    </header>
</template>
