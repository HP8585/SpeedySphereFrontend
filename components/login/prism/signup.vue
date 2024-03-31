<script setup>
const form = reactive({
  username: "",
  fullName: "",
  password: "",
  confirmPassword: "",
  gender: "Gender"
});
const emits = defineEmits(['showThankYou'])

const { signup, isLoading, showThanks } = useSignup();

const handleSubmit = async ()=>{
  if(form.gender === "Gender"){
    states().value.errNotif = true;
    states().value.errText = "You've not still chosen any genders"
  }else{
    signup(form)
  }
};

watch(()=> showThanks.value, ()=>{
  if(showThanks.value){
    emits('showThankYou')

    setTimeout(() => {
      navigateTo("/")
    }, 3000);
  }
})

const lowerCaseUsername = computed({
  get: () => form.username,
  set: (value) => {
    form.username = value.toLowerCase();
  }
});
</script>

<template>
  <div class="face face-right">
    <div class="content">
      <h2>Sign up</h2>
      <form @submit.prevent="handleSubmit">
        <div class="flex gap-2">
          <div class="relative">
            <input id="fullName" type="text" v-model="form.fullName" maxlength="20"/>
            <label for="fullName" :class="form.fullName !== '' ? 'active' : ''"
              >Full Name</label
            >
          </div>
          <div class="relative">
            <input id="username" type="text" v-model="lowerCaseUsername" maxlength="20"/>
            <label for="username" :class="form.username !== '' ? 'active' : ''"
              >Username</label
            >
          </div>
        </div>
        <div class="relative">
            <input id="password" type="password" v-model="form.password"/>
            <label for="password" :class="form.password !== '' ? 'active' : ''"
              >Password</label
            >
          </div>
          <div class="relative">
            <input id="confirmPassword" type="password" v-model="form.confirmPassword"/>
            <label for="confirmPassword" :class="form.confirmPassword !== '' ? 'active' : ''"
              >Confirm Password</label
            >
          </div>

          <select class="select select-bordered w-full max-w-xs" v-model="form.gender">
            <option disabled selected>Gender</option>
            <option>male</option>
            <option>female</option>
        </select>
        
        <input type="submit" :disabled="isLoading" :class="isLoading ? 'loadingg':''">
        <small @click="$emit('showSignin')">Already have an account?</small>
      </form>
      
    </div>
  </div>
</template>

<style scoped>
small{
  @apply text-blue-700 text-[.85rem] underline mt-4
  text-center cursor-pointer
}
form{
    @apply mt-6 flex flex-col gap-4
}
h2 {
  @apply text-violet-500 text-3xl font-semibold text-center;
}

input {
  @apply border border-slate-300 rounded-md px-2 py-1.5
   w-full outline-none focus:border-violet-500 cursor-pointer;
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
.loadingg{
  @apply opacity-60 cursor-auto
}
</style>
<style>
.select{
    @apply outline-none max-w-32;
    outline-width: 0;
}
.select:focus {
    @apply outline-none border-violet-600;

}
</style>
<!-- <template>
    <div class="face face-right">
      <div class="content">
        <h2>Sign up</h2>
        <form onsubmit="event.preventDefault()">
          <div class="field-wrapper">
            <input type="text" name="email" placeholder="email">
            <label>e-mail</label>
          </div>
          <div class="field-wrapper">
            <input type="password" name="password" placeholder="password" autocomplete="new-password">
            <label>password</label>
          </div>
          <div class="field-wrapper">
            <input type="password" name="password2" placeholder="password" autocomplete="new-password">
            <label>re-enter password</label>
          </div>
          <div class="field-wrapper">
            <input type="submit" @click="$emit('showThankYou')">
          </div>
          <span class="singin" @click="$emit('showLogin')">Already a user?  Sign in</span>
        </form>
      </div>
    </div>
</template> -->
