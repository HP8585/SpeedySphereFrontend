<script setup>
const layout = "settings";

const { fullName } = states().value.authUser;
</script>


<template>
  <NuxtLayout :name="layout">
    <SidebarSettingsProfile/>
    <SidebarSettingsOptions/>
  </NuxtLayout>
</template>