<script setup>
import sound from "../../../../assets/notification.mp3"
watch(()=> states().value.socket, ()=>{
   states().value.socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;
			const notification = new Audio(sound);
			if(states().value.notificationSound){
			notification.play()
			}

			states().value.messages.push(newMessage)
		});

		return () => states().value.socket?.off("newMessage");
});


watch(()=> states().value.messages.length,()=>{
	
	setTimeout(() => {
		document.querySelector(`.lastMsg${document.querySelectorAll('.msgg').length - 1}`).scrollIntoView({ behavior: 'smooth', block: 'end' })
	}, 50);

	if(states().value.allUsers){
	states().value.allUsers.map((user)=>{
		if(user._id === states().value.selectedConversation._id){
			if(user?.lastMessage){
			user.lastMessage = states().value.messages[states().value.messages.length - 1]
			}
		}
	})
}
})
</script>

<template>
<div class="mt-2 overflow-y-scroll h-[80%] scrollbar-none px-6">


<FeedChatboxMessagesMessage
:class="`lastMsg${idx} msgg ${msg?.shouldShake ? 'shake':''}`"
v-for="(msg, idx) in states().value.messages"
:key="idx"
:message="msg"
v-if="states().value.messages.length > 0"
/>


<div v-else-if="states().value.selectedConversation._id !== 21"
class="mx-auto w-fit text-slate-400">
   <span class="mx-auto">Send a message to begin a conversation</span>
</div>

<div class="mx-auto my-64 w-fit h-fit text-center" v-else>
<h1 class="text-4xl font-semibold">Hey {{ states().value.authUser?.fullName }} 👋</h1>
<p class="text-lg">Select a conversation to start chatting</p>
<Icon
name="ph:chats"
color="#7c3aed"
size="100"
/>
</div>
</div>
</template>