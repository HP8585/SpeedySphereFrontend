<template>
    <div class="face face-bottom">
      <div class="content">
        <div class="thank-msg">
          Thank you!
        </div>
        <div class="small">
          <small>You will be redirected to the feed page within a few seconds</small>
        </div>
        <img src="~/assets/3d-female.png">
        <h2>SpeedySphere</h2>
      </div>
    </div>
</template>

<style scoped>
.thank-msg{
  @apply text-4xl font-semibold text-center my-auto text-violet-700
}
.small{
  @apply text-center mt-1 text-[1.1rem]
}
img{
  @apply h-80 mx-auto
}
h2{
  @apply text-blue-700 text-xl font-semibold text-center
}
</style>