<script setup>

const blankUser = 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg';

const searchInp = ref(false)

watch(()=>states().value.searchFocused, ()=>{


if(states().value.searchFocused){
    searchInp.value = true
}else{
    setTimeout(() => {
    searchInp.value = false;
}, 300);
}
} )
</script>

<template>
    <div class="sidebar-con" :class="states().value.sidebarOn === 'sidebar' ? 'px-3' : ''">
        <!-- Users sidebar -->
        <div v-if="states().value.sidebarOn === 'sidebar'">
            <div class="header-con">
            <h1 v-if="!searchInp">SpeedySphere</h1>
            <h1 v-else></h1>
            <div class="flex items-center gap-2">
            <!-- <Icon name="mynaui:search" color="black" size="28" class="cursor-pointer"/> -->
            <SidebarSearchInput/>
            <div class="avatar w-10 h-10 cursor-pointer" @click="states().value.sidebarOn = 'settings'">
                <img :src="states().value.authUser?.profilePic" class=" rounded-full">
            </div>
            </div>
        </div>

        <SidebarConversations/>
        </div>

        <!-- Settings sidebar -->
        <div v-else-if = "states().value.sidebarOn === 'settings'">
            <SidebarSettings/>
        </div>

        <!-- Change PW -->
        <div v-else-if="states().value.sidebarOn === 'changePW'">
            <SidebarSettingsChangePW/>
        </div>

        <!-- Edit profile -->
        <div v-else>
            <SidebarSettingsEditProfile/>
        </div>
    </div>
</template>

<style scoped>
.sidebar-con{
    @apply md:w-[30em] py-4  bg-white rounded-xl shadow-md
}
.sidebar-con .header-con{
    @apply flex justify-between items-center h-12
}
.sidebar-con .header-con{
    @apply text-blue-800 font-semibold text-lg px-3
}
</style>