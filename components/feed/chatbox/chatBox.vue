<script setup>

const { getMessages, isLoading } = useGetMessages();
watchEffect(()=>{
    if(states().value.selectedConversation._id !== 21){
        getMessages()
    }
})
</script>

<template>
<div class="w-full relative chatbox-con">
<!-- contact bar -->
<FeedChatboxContact/>

<!-- messages -->
<FeedChatboxMessages/>

<!-- message input -->
<FeedMessageInput/>
</div>
</template>

