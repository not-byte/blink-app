<script lang="ts" setup>
const setting = defineProps<{
    name: string;
    children: string[];
}>();
</script>

<template>
    <h1 class="text-left py-4 font-semibold text-2xl">{{ setting.name }}</h1>
    <ul>
        <li v-for="child in setting.children">
            <a href="/settings" class="text-left">{{ child }}</a>
        </li>
    </ul>
</template>
