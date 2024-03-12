<script setup>
import axios from 'axios';


watch(()=> states().value.notificationSound, ()=>{

    localStorage.notificationSound = states().value.notificationSound;

})

const form = reactive({
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


watch(()=> states().value.authUser.profilePic, async ()=>{
   await editProfile(form);
    console.log('sent');
})

</script>

<template>
    <div class="optionsCon">
        <div class="cameraCircle">
            <input
            type="file"
            ref="fileInpRef"
            @change="compressAndConvertToBase64($event.target.files[0], 600, 600, 0.8)"
            hidden
          />
            <Icon name="mynaui:camera" size="30" color="white" @click="fileInpRef.click()"/>
        </div>
        <ul>
            <!-- when clicking on username it shall be copied into clipboard -->
            <li> 
                <Icon name="mynaui:at" size="30" color="#94a3b8"/>
                <div class="flex flex-col">
                <span class="text-lg">{{ states().value.authUser?.username }}</span>
                <small>Username</small>
                </div>
            </li>
            <li @click="states().value.sidebarOn = 'changePW'">
                <Icon name="mynaui:lock-password" size="30" color="#94a3b8"/>
                <span>Change Password</span>
            </li>
            <li class="justify-between pr-2">
                <div class="flex gap-4 items-center">
                <Icon name="mynaui:bell" size="30" color="#94a3b8"/>
                <span>Notification Sound</span>
                </div>
                <input id="toggle" type="checkbox" class="toggle" v-model="states().value.notificationSound" />
            </li>
            <li class="justify-between pr-2">
                <div class="flex gap-4 items-center">
                <Icon name="mynaui:user-x" size="30" color="#ef4444"/>
                <span class="text-red-500"><button onclick="my_modal_5.showModal()">Delete Account</button></span>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.optionsCon{
    @apply p-3 relative
}
.optionsCon ul{
    @apply  flex flex-col gap-5
}
.optionsCon ul > li{
    @apply flex gap-4 items-center cursor-pointer
}
.optionsCon .cameraCircle{
    @apply bg-violet-500 w-fit p-3 rounded-full
    absolute -top-7 right-5 cursor-pointer
}
.optionsCon .toggle{
    @apply bg-violet-500 hover:bg-violet-600 border-violet-500
}
</style>