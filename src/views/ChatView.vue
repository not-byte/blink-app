<script lang="ts" setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import MessageComponent from "@/components/MessageComponent.vue";

const messages = [
    {
        sender: "You",
        content:
            "Hey Bob, have you heard about this new project called BLINK? It's part of a Web3 initiative.",
    },
    {
        sender: "Bob",
        content: "No, I haven't heard of BLINK. What's it about?",
    },
    {
        sender: "You",
        content:
            "It's a DApp that focuses on creating a communication system on the ICP blockchain. It’s actually part of an On-Chain Bootcamp I’m participating in.",
    },
    {
        sender: "Bob",
        content:
            "That sounds interesting. So, it's all about Web3 technologies then?",
    },
    {
        sender: "You",
        content:
            "Exactly. Web3 is all about decentralization and giving control back to users. With BLINK, we're aiming to innovate in digital services, data security, and interoperability using smart contracts on the ICP blockchain.\n",
    },
    {
        sender: "You",
        content:
            "Hey Bob, have you heard about this new project called BLINK? It's part of a Web3 initiative.",
    },
    {
        sender: "Bob",
        content: "No, I haven't heard of BLINK. What's it about?",
    },
    {
        sender: "You",
        content:
            "It's a DApp that focuses on creating a communication system on the ICP blockchain. It’s actually part of an On-Chain Bootcamp I’m participating in.",
    },
    {
        sender: "Bob",
        content:
            "That sounds interesting. So, it's all about Web3 technologies then?",
    },
    {
        sender: "You",
        content:
            "Exactly. Web3 is all about decentralization and giving control back to users. With BLINK, we're aiming to innovate in digital services, data security, and interoperability using smart contracts on the ICP blockchain.\n",
    },
];
</script>

<template>
    <section
        class="w-full h-full flex flex-col gap-6 transition-root pb-[12rem] lg:pb-12"
    >
        <HeaderComponent :title="$route.params.reciever_id as string" />
        <p class="text-[2rem] lg:text-base">Status: Offline</p>
        <article
            class="flex-grow flex flex-col gap-6 lg:gap-3 rounded-xl overflow-y-scroll no-scrollbar mb-3 lg:mb-0"
        >
            <MessageComponent
                v-for="{ sender, content } in messages"
                :message="content"
                :sender="sender"
            />
        </article>
        <InputComponent />
    </section>
</template>
