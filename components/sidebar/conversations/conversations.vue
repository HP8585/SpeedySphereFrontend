<script setup>

const { getAllUsers, isLoading, getAllUsersMessages } = useGetAllUsers();

onMounted(() => {
  getAllUsers();
  setTimeout(() => {
    getAllUsersMessages();
  }, 1000);
});

watch(()=> states().value.socket, ()=>{
states().value.socket.on('profileUpdated', (userUpdated)=>{

  const index = states().value.allUsers.findIndex(user => user._id === userUpdated._id);
  if (index !== -1) {
    states().value.allUsers[index] = userUpdated;
  }
});

states().value.socket.on('updateAllUsers', ()=>{
    getAllUsers()
  })
})
</script>

<template>
  <div class="flex flex-col h-full">
    <span class="border-b font-semibold text-violet-700 px-3">All users</span>
    <span
      class="loading loading-spinner loading-lg text-violet-600 mx-auto my-auto"
      v-if="isLoading"
    />
    <ul class="overflow-y-scrol scrollbar-none" v-else>
      <div class="md:block hidden overflow-y-scroll scrollbar-none h-[40em]">
        <SidebarConversationsConversation
          v-for="(user, idx) in states().value.allUsers"
          :key="idx"
          :user="user"
          
        />
      </div>
      <div class="md:hidden block overflow-y-scroll scrollbar-none h-[50em]">
        <SidebarConversationsConversation
          v-for="(user, idx) in states().value.allUsers"
          :key="idx"
          :user="user"
          @click="states().value.chatsShown = true"
          
        />
      </div>
    </ul>
  </div>
</template>

<style scoped></style>
