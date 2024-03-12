<script setup>
// const chatsShown = ref(false)

definePageMeta({
  middleware: 'feed'
})
</script>

<template>
  <div class="bg-violet-100 h-screen flex items-center justify-center">
    <div class="bg-slate-100 md:w-[80%] md:h-[80%] h-full w-full rounded-xl overflow-hidden md:flex gap-2 relative">
      <ErrModal/>
      <DeleteAccountModal/>
      <!-- Sidebar (conversations list and all users) -->
      <Sidebar class="h-full w-full" :class="states().value.chatsShown ? 'hidden': 'block'"/>

      <!-- Chatbox -->
      <FeedChatboxChatBox class="md:translate-y-0 h-full z-[100]" :class="states().value.chatsShown ? 'translate-y-0' : 'translate-y-20'"/>
    </div>
  </div>
</template>
