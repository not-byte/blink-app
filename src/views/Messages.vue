<script setup lang="ts">
import Online from '@/components/messages/Online.vue'
import RecentChats from '@/components/messages/RecentChats.vue'

</script>

<template>
  <section class="px-2 py-4">
    <div class="flex items-center justify-between">
      <div>
        <h3 class="font-normal">Good morning!🌤️</h3>
        <h1 class="text-4xl font-semibold py-1">Henry</h1>
        <!-- TODO: ICON -->
      </div>
      <div class="h-[52px] w-[52px] border border-white border-opacity-10 bg-white bg-opacity-5 backdrop-blur-[10%] rounded-xl"></div>
    </div>
    <div class="flex justify-end my-5 w-full h-[52px] border border-white border-opacity-10 bg-white bg-opacity-5 backdrop-blur-[10%] rounded-2xl">
      <input class="w-[86%] bg-transparent outline-none placeholder:text-white" placeholder="Search" type="text" name="" id="">
    </div>
    <Online/>
    <RecentChats/>
  </section>
</template>
