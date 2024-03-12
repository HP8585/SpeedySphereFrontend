<script setup>
const props = defineProps(["user"]);
const { user } = toRefs(props);

function getRelativeDate() {
    if (user.value?.lastMessage) {
        const timestamp = new Date(user.value?.lastMessage?.createdAt);
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const messageTimestamp = Math.floor(timestamp / 1000);
        const difference = currentTimestamp - messageTimestamp;
        let output = ``;

        if (difference < 60) {
            output = `${difference} seconds ago`;
        } else if (difference < 3600) {
            output = `${Math.floor(difference / 60)} minutes ago`;
        } else if (difference < 86400) {
            output = `${Math.floor(difference / 3600)} hours ago`;
        } else if (difference < 2620800) {
            output = `${Math.floor(difference / 86400)} days ago`;
        } else if (difference < 31449600) {
            output = `${Math.floor(difference / 2620800)} months ago`;
        } else {
            output = `${Math.floor(difference / 31449600)} years ago`;
        }

        return output;
    }
}

const relative = ref(getRelativeDate());

setInterval(()=>{
relative.value = getRelativeDate();

}, 2000)

</script>

<template>
  <div
    class="conv-con"
    :class="
      states().value.selectedConversation._id === user._id
        ? 'sm:bg-violet-100 bg-white'
        : 'bg-white'
    "
    @click="states().value.selectedConversation = user"
  >
    <div
      class="avatar w-16 h-12 object-cover"
      :class="states().value.onlineUsers.includes(user._id) ? 'online' : ''"
    >
      <img :src="user?.profilePic" class="rounded-full" />
    </div>
    <div class="w-full">
      <div class="flex justify-between items-center w-full">
        <span class="font-bold">{{ user?.username }}</span>
        <span class="text-slate-400 text-sm"
          >{{ relative }}
        </span>
      </div>
      <div>
        <p class="text-slate-400 truncate max-w-64">
          {{ user?.lastMessage?.message }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.conv-con {
  @apply flex gap-4 hover:bg-violet-100 cursor-pointer py-3 px-3
    w-full rounded-md;
}
.avatar.online:before {
  @apply top-8 right-0 w-2.5 h-2.5;
}
</style>
