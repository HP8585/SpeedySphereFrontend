<script setup>
const oldPWEye = ref(false),
  newPWEye = ref(false)

const form = reactive({
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
});

const { editProfile, isLoading } = useEditProfile();

const handleSubmit = () => {
  editProfile(form);
};
</script>

<template>
  <NuxtLayout :name="'change-pw'">
    <form class="changePW-con" @submit.prevent="handleSubmit" id="form">
      <ul>
        <li>
          <Icon
            :name="oldPWEye ? 'mynaui:eye-slash' : 'mynaui:eye'"
            size="22"
            class="eye"
            color="#94a3b8"
            @click="oldPWEye = !oldPWEye"
          />
          <input
            id="oldPW"
            :type="oldPWEye ? 'text' : 'password'"
            v-model="form.oldPassword"
          />
          <label for="oldPW" :class="form.oldPassword !== '' ? 'active' : ''"
            >Old Password</label
          >
        </li>

        <li>
          <Icon
            :name="newPWEye ? 'mynaui:eye-slash' : 'mynaui:eye'"
            size="22"
            class="eye"
            color="#94a3b8"
            @click="newPWEye = !newPWEye"
          />
          <input
            :type="newPWEye ? 'text' : 'password'"
            v-model="form.newPassword"
            id="newPW"
          />
          <label for="newPW" :class="form.newPassword !== '' ? 'active' : ''"
            >New Password</label
          >
        </li>

        <li>
          <input
            type="password"
            v-model="form.confirmPassword"
            id="confirmPW"
          />
          <label for="confirmPW" :class="form.confirmPassword !== '' ? 'active' : ''"
            >Confirm Password</label
          >
        </li>
      </ul>

      <input type="submit" />
    </form>
  </NuxtLayout>
</template>

<style scoped>
.changePW-con {
  @apply px-6 py-4;
}
.changePW-con ul {
  @apply flex flex-col gap-6;
}
.changePW-con ul > li {
  @apply relative flex flex-col relative;
}
input {
  @apply border border-slate-300 rounded-md px-2 py-1.5
    outline-none focus:border-violet-500 cursor-pointer;
}
label {
  @apply absolute top-1/2 -translate-y-1/2 left-4 duration-150
    bg-white;
}
label.active {
  @apply -translate-y-8;
}
input:focus ~ label {
  @apply -translate-y-8 duration-150;
}
.eye {
  @apply absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer;
}
input[type="submit"] {
  @apply w-full mt-8 bg-violet-500 text-white border-none;
}
</style>
