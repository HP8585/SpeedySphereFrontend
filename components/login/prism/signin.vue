<script setup>
const form = reactive({
  username: "",
  password: ""
});
const showPW = ref(false)
const emits = defineEmits(['showThankYou'])

const { login, isLoading, showThanks } = useLogin();

const handleSubmit = async ()=>{

    await login(form);

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
  <div class="face face-front">
    <div class="content">
      <h2>Sign in</h2>
      <form @submit.prevent="handleSubmit">
          <div class="relative">
            <input id="username" type="text" v-model="lowerCaseUsername" maxlength="20"/>
            <label for="username" :class="form.username !== '' ? 'active' : ''"
              >Username</label
            >
          </div>
    
        <div class="relative">
            
              <input id="password" :type="showPW ? 'text':'password'" v-model="form.password"/>
              <Icon
            :name="showPW ? 'mynaui:eye-slash' : 'mynaui:eye'"
            size="22"
            class="eye"
            color="#94a3b8"
            @click="showPW = !showPW"
          />
            <label for="password" :class="form.password !== '' ? 'active' : ''"
              >Password</label
            >
          </div>
        
        <input type="submit">
        <small @click="$emit('showSignup')">Don't have an account?</small>
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
.eye{
  @apply absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer
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