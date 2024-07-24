<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <main class="flex justify-center items-center h-screen text-white">
    <section class="h-screen w-screen px-6 py-4 md:h-[932px] md:w-[430px] bg-main-background md:border md:border-white md:border-opacity-10 md:rounded-3xl">
      <Nav/>
      <RouterView />
      <Footer/>
    </section>
  </main>
</template>