<script setup>
import io from "socket.io-client";

const beginSocket = ref(false);

onNuxtReady(() => {
  beginSocket.value = true;
  states().value.notificationSound = localStorage.notificationSound;
  states().value.authUser = JSON.parse(localStorage.getItem('user'))
});

watch(
  () => beginSocket.value,
  () => {
    if (states().value.authUser) {
      const socket = io("https://speedysphere-backend.vercel.app", {
        query: {
          userId: states().value.authUser._id,
        },
      });

      states().value.socket = socket;

      socket.on("getOnlineUsers", (users) => {
        states().value.onlineUsers = users;
      });
    } else {
      if (states().value.socket) {
        states().value.socket.close();
        states().value.socket = null;
      }
    }
  }
);
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
