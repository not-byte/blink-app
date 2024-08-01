<script lang="ts" setup>
const setting = defineProps<{
    name: string;
    children: string[];
}>();
</script>

<template>
    <h1 class="text-left">{{ setting.name }}</h1>
    <ul>
        <li v-for="child in setting.children">
            <p class="text-left">{{ child }}</p>
        </li>
    </ul>
</template>
