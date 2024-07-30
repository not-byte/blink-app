<script lang="ts" setup>
import HeaderModule from "@/components/module/settings/HeaderModule.vue";
import SearchBarModule from "@/components/module/SearchBarModule.vue";
</script>

<template>
    <HeaderModule title="Settings" />
    <SearchBarModule />
    <h1>General</h1>
    <ul>
        <li>Your profile</li>
        <li>Online status</li>
        <li>Language</li>
        <li>Theme</li>
    </ul>

    <h1>Privacy</h1>
    <ul>
        <li>Blocked users</li>
        <li>Profile visibility</li>
    </ul>

    <h1>Security</h1>
    <ul>
        <li>Multi-factor authentication</li>
        <li>Your devices</li>
        <li>Account recovery</li>
        <li>Profile visibility</li>
    </ul>

    <h1>Notifications</h1>
    <ul>
        <li>Do not disturb Mode</li>
        <li>Notifications sound</li>
        <li>Vibrations</li>
    </ul>

    <h1>About</h1>
    <ul>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>App version</li>
    </ul>

    <h1>Advanced</h1>
    <ul>
        <li>Developer Mode</li>
        <li>Diagnostics data</li>
    </ul>
</template>
