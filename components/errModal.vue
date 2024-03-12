<script setup>
const duration = ref(1000);
const percentage = ref(0);

function beginInterval() {
    duration.value = 1000;
    percentage.value = 0;
  let interval = setInterval(() => {
    duration.value--;
    percentage.value = Math.floor((duration.value / 1000) * 100);
    if (duration.value == 0){
        states().value.errNotif = false;
        clearInterval(interval)}
  }, 1);
}


watch(()=> states().value.errNotif , ()=>{
    if(states().value.errNotif){
        beginInterval()
    }
})
</script>

<template>
  <div class="errorModalCon" :class="states().value.errNotif ? 'active':''">
    <div class="flex gap-2 p-2">
      <Icon name="ic:outline-error-outline" size="25" color="white" />
      <div>
        <strong>Error!</strong>
        <p>{{ states().value.errText }}</p>
      </div>
    </div>
    <div class="h-1.5 rounded-sm bg-red-700" :style="`width: ${percentage}%;`" />
  </div>
</template>

<style scoped>
.errorModalCon {
  @apply bg-red-500 h-fit w-fit text-white overflow-hidden
    absolute z-[9991] -translate-x-[101%] duration-500 top-5 rounded-md;
}
.errorModalCon.active{
    @apply translate-x-0 ease-in-out duration-500;
}
</style>
