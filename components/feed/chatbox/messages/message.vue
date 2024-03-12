<script setup>
const props =defineProps(['message'])

const { authUser, selectedConversation } = states().value;

const convertDate = (date)=>{
if(date){
  const converted = new Intl.DateTimeFormat('en-US', {
        timeStyle: 'short'
    }).format(new Date(date));

    return converted
}
}
</script>

<template>
  <div class="chat" :class="props.message?.senderId === authUser?._id ? 'chat-end' : 'chat-start'">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full" :class="props.message?.senderId !== authUser?._id ? 'mb-4':''">
        <img :src="props.message?.senderId === authUser?._id ? authUser?.profilePic : selectedConversation?.profilePic"/>
      </div>
    </div>
    <div class="chat-bubble " :class="props.message?.senderId === authUser?._id ? 'bg-violet-600 text-white' : 'bg-slate-300 text-black'">
     {{ props.message?.message }}
    </div>
    <span class="text-sm">{{ convertDate(props.message?.createdAt) }}</span>
  </div>
</template>
