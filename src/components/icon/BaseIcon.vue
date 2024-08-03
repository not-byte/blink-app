<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
    active?: boolean;
}>();

const active = ref<boolean>(props.active);

const switchActive = (): boolean => {
    active.value = !active.value;

    return active.value;
};
</script>

<template>
    <svg
        :class="
            active
                ? 'w-24 h-24 lg:w-10 lg:h-10 fill-slate-blue'
                : 'w-24 h-24 lg:w-10 lg:h-10 fill-white transition-all cursor-pointer'
        "
        height="40"
        viewBox="0 0 40 40"
        width="40"
        xmlns="http://www.w3.org/2000/svg"
    >
        <slot></slot>
    </svg>
</template>
