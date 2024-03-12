<script setup>

const logout = ref(false);

onMounted(()=>{
    window.addEventListener('click', ()=>{
        logout.value = false
    })
});

const logoutUser= ()=>{
    console.log('fuckkk');
   if(localStorage){
    localStorage.removeItem("user");
   }
    useCookie('jwt').value = null;
    navigateTo("/login")
}
</script>

<template>
<div>
<header>
    <div>
        <Icon name="mynaui:arrow-left" size="30" @click="states().value.sidebarOn = 'sidebar'"
        color="#94a3b8" class="cursor-pointer"/>
        <span class="text-xl font-semibold">Settings</span>
    </div>

    <div>
        <Icon name="mynaui:pencil" size="30" color="#94a3b8" @click="states().value.sidebarOn = 'editProfile'" class="cursor-pointer"/>
        <Icon name="mynaui:dots-vertical" size="35" color="#94a3b8" class="cursor-pointer"
        @click.stop="logout=!logout"/>
    </div>

    <div class="logout" v-show="logout" @click.stop="logoutUser">
        <Icon name="mynaui:logout" size="25"/>
        <span class="cursor-pointer">Logout</span>
    </div>
</header>

<slot/>
</div>
</template>

<style scoped>
.logout{
@apply bg-white absolute top-10 right-2 shadow p-1 rounded-sm
flex gap-1 text-red-500 cursor-pointer z-50
}
header{
    @apply flex justify-between items-center px-3 mb-4 relative
}
header > div{
    @apply flex gap-3 items-center
}
</style>