<script lang="ts" setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import MessageComponent from "@/components/MessageComponent.vue";

const message: string =
    "Testowa wiadomośc wysłana przez idiotę xd1234f23refdfgs";
</script>

<template>
    <section class="w-full h-full flex flex-col gap-6 transition-root pb-12">
        <HeaderComponent :title="$route.params.reciever_id as string" />
        <p>Status: Offline</p>
        <article
            class="flex-grow flex flex-col gap-3 rounded-xl overflow-y-scroll no-scrollbar"
        >
            <template v-for="n in 5">
                <MessageComponent
                    :message="message"
                    :sender="$route.params.reciever_id as string"
                />
                <MessageComponent message="Brahhhhh hehe" sender="You" />
                <MessageComponent :message="message" sender="You" />
            </template>
        </article>
        <InputComponent />
    </section>
</template>
