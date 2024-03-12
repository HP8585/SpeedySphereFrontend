<script setup>
const blankUser = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMc46sIJf3WJDdhvo2TXYUKu9fz3u0eFF-TsJ2ztIdA&s';

</script>

<template>
    <div class="contact-header" v-show="states().value.selectedConversation._id !== 21">
       <div class="md:hidden block">
        <Icon name="mynaui:arrow-left" size="30"
        @click="states().value.chatsShown=false"
        />
       </div>
        <div class="avatar w-12 h-12" :class="states().value.onlineUsers.includes(states().value.selectedConversation._id) ? 'online' : ''">
            <img :src="states().value.selectedConversation?.profilePic ? states().value.selectedConversation?.profilePic : blankUser" class="rounded-full">
        </div>
        <div class="flex flex-col gap-0">
            <span class="font-bold text-lg m-0">{{ states().value.selectedConversation?.fullName }}</span>
            <span class="text-sm -mt-1">{{ states().value.onlineUsers.includes(states().value.selectedConversation._id) ? 'Online' : 'Offline' }}</span>
        </div>
    </div>
</template>

<style scoped>

.contact-header{
    @apply w-full bg-white py-2 px-5 rounded-lg rounded-b-none shadow-sm
    flex gap-3 items-center;
    
}
.avatar.online:before{
    @apply top-10 right-0 w-3 h-3
}
</style>