<script lang="ts" setup>
defineProps<{
    title: string;
}>();
</script>

<template>
    <header class="w-full">
        <h3>
            {{ title }}
        </h3>
    </header>
</template>
