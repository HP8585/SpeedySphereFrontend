<script setup>
const { fullName } = states().value.authUser;
</script>

<template>
    <div class="profileCon">
        <img :src="states().value.authUser?.profilePic"
        class="w-full select-none" draggable="false">

        <div class="fullName">
            <span class="text-lg font-semibold">{{ fullName }}</span>
            <span class="text-sm">Online</span>
        </div>
    </div>
</template>

<style scoped>
.profileCon{
    @apply relative overflow-hidden;
}


.profileCon .fullName{
    @apply w-full text-white absolute bottom-0 left-0 px-5 flex flex-col;
    background: linear-gradient(360deg, #0000004d 8.98%, #0000);
}
</style>