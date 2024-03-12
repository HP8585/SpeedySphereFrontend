<script setup>
const usernameAssurance = ref("");

const { deleteUser } = useDeletUser();

const handleDeletion = () => {
    deleteUser()
};
</script>

<template>
  <dialog
    id="my_modal_5"
    class="modal modal-bottom sm:modal-middle text-center"
  >
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h1>Are you sure?</h1>
      <p>
        Type <strong>"{{ states().value.authUser?.username }}"</strong> and then
        click on submit to permanently delete your account
      </p>
      <div class="flex flex-col gap-4 w-fit mx-auto mt-4">
        <input id="confirmDeletion" type="text" v-model="usernameAssurance" />
        <button
          class="deletionBtn"
          @click="handleDeletion"
          :class="
            usernameAssurance !== states().value.authUser?.username
              ? 'disabled'
              : ''
          "
          :disabled="usernameAssurance !== states().value.authUser?.username"
        >
          Delete Account
        </button>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
h1 {
  @apply font-bold text-lg text-center mb-2;
}
input {
  @apply border border-slate-300 rounded-md px-2 py-1.5
    outline-none focus:border-violet-500 cursor-pointer;
}
.deletionBtn {
  @apply bg-red-500 w-fit mx-auto p-2 rounded-lg text-white;
}
.deletionBtn.disabled {
  @apply bg-slate-600;
}
strong{
  @apply select-none
}
</style>
