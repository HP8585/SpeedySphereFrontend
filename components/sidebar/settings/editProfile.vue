<script setup>

const form = reactive({
  fullName: states().value.authUser?.fullName || null,
  username: states().value.authUser?.username || null,
  profilePic: states().value.authUser.profilePic,
});

watch(
  () => states().value.authUser?.profilePic,
  () => {
    form.profilePic = states().value.authUser?.profilePic;
  }
);

const fileInpRef = ref(null);

const { compressAndConvertToBase64 } = useConversion();

const { editProfile, isLoading } = useEditProfile()

const handleSubmit = ()=>{
  editProfile(form)
}
</script>

<template>
  <NuxtLayout :name="'edit-profile'">
    <div>
      <form class="editProfCon" @submit.prevent="handleSubmit">
        <!-- profile picture -->
        <div class="profileContainer">
          <input
            type="file"
            ref="fileInpRef"
            @change="compressAndConvertToBase64($event.target.files[0], 600, 600, 0.8)"
            hidden
          />
          <img :src="form.profilePic" alt="" />
          <div class="layout" @click="fileInpRef.click()">
            <Icon name="mynaui:camera" color="white" size="50" />
          </div>
        </div>

        <div class="relative">
          <input id="fullName" type="text" v-model="form.fullName" />
          <label for="fullName" :class="form.fullName !== '' ? 'active' : ''"
            >Full Name</label
          >
        </div>

        <div class="relative">
          <input id="username" type="text" v-model="form.username" />
          <label for="username" :class="form.username !== '' ? 'active' : ''"
            >Username</label
          >
        </div>
        <input type="submit" />
      </form>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.editProfCon {
  @apply flex flex-col items-center justify-center gap-6 w-fit mx-auto;
}
.profileContainer {
  @apply relative overflow-hidden w-fit mx-auto mt-2 rounded-full
    mb-2;
}
.profileContainer img {
  @apply rounded-full w-28 h-28 object-cover;
}
.profileContainer .layout {
  @apply absolute z-40 top-1/2 -translate-y-1/2 cursor-pointer
    left-1/2 -translate-x-1/2 bg-black w-full h-full bg-opacity-20;
}
.profileContainer .layout svg {
  @apply absolute top-1/2 -translate-y-1/2
    left-1/2 -translate-x-1/2;
}

input {
  @apply border border-slate-300 rounded-md px-2 py-1.5
    outline-none focus:border-violet-500 cursor-pointer;
}
label {
  @apply absolute top-1/2 -translate-y-1/2 left-4 duration-150
    bg-white text-slate-400;
}
label.active {
  @apply -translate-y-8 text-sm;
}
input:focus ~ label {
  @apply -translate-y-8 duration-150 text-sm;
}
input[type="submit"] {
  @apply w-full bg-violet-500 text-white border-none;
}
</style>
