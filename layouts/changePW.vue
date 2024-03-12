<template>
  <div>
    <header>
      <div>
        <Icon
          name="mynaui:arrow-left"
          size="30"
          @click="states().value.sidebarOn = 'settings'"
          color="#94a3b8"
          class="cursor-pointer"
        />
        <span class="text-xl font-semibold">Change Password</span>
      </div>
    </header>

    <slot />
  </div>
</template>

<style scoped>
header{
    @apply flex justify-between items-center px-3 mb-4
}
header > div{
    @apply flex gap-3 items-center
}
</style>