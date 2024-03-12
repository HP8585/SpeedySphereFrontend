<script setup>
// const message = ref("")
const { sendMessage, isLoading } = useSendMessage();
const { emojisShown } = fetchEmojisInit();

const handleSubmit = async () => {
  if (states().value.message === "") return;
  await sendMessage(states().value.message);
  states().value.message = "";
};
</script>

<template>
  <form
    class="absolute bottom-0 w-full"
    v-show="states().value.selectedConversation._id !== 21"
    @submit.prevent="handleSubmit"
  >
    <div class="w-full relative">
      <FeedEmojis />
      <textarea
        id="messageArea"
        cols="20"
        rows="1"
        placeholder="Write a message..."
        v-model="states().value.message"
        class="scrollbar-none"
      ></textarea>
      <Icon
        name="mynaui:smile-circle"
        size="30"
        color="#94a3b8"
        class="absolute inset-y-3.5 start-3 cursor-pointer"
        @click.stop="emojisShown = !emojisShown"
      />
    </div>
    <button type="submit" class="send">
      <Icon name="mynaui:send" color="white" size="31" />
    </button>
  </form>
</template>

<style scoped>
form {
  @apply flex items-center gap-4 px-3;
}
form textarea {
  @apply w-full resize-none rounded-xl outline-none px-12 py-4;
}
form .send {
  @apply bg-gradient-to-b from-violet-600 to-violet-400 py-3 px-3
    mb-1 rounded-xl h-full;
}
</style>
