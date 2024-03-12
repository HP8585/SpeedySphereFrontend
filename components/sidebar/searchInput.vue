<script setup>
const searchVal = ref("");

watch(
  () => states().value.searchFocused,
  () => {
    if (!states().value.searchFocused) {
      searchVal.value = "";
    }
  }
);

const handleSubmit = () => {
  if (!searchVal.value) return;

  const conversation = states().value.allUsers.find((c) =>
    c.username.toLowerCase().includes(searchVal.value.toLowerCase())
  );

  if (conversation) {
    states().value.selectedConversation = conversation;
  }
};

watch(
  () => searchVal.value,
  () => {
    handleSubmit();
  }
);
</script>

<template>
  <div class="search">
    <div>
      <input
        v-model="searchVal"
        @focus="states().value.searchFocused = true"
        @focusout="states().value.searchFocused = false"
        type="text"
        placeholder="Search . . ."
        required
      />
    </div>
  </div>
</template>

<style scoped>
.search {
  margin: 20px;
}

.search > div {
  display: inline-block;
  position: relative;
}

.search > div:after {
  content: "";
  background: black;
  width: 1px;
  height: 15px;
  position: absolute;
  top: 20px;
  right: -3px;
  transform: rotate(135deg);
}

.search > div > input {
  color: black;
  font-weight: 400;
  background: transparent;
  width: 25px;
  height: 25px;
  padding: 10px;
  border: solid 1px black;
  outline: none;
  border-radius: 35px;
  transition: width 0.5s;
  cursor: pointer;
}

.search > div > input::placeholder {
  color: #94a3b8;
  opacity: 0;
  transition: opacity 150ms ease-out;
}

.search > div > input:focus::placeholder {
  opacity: 1;
}

.search > div > input:focus,
.search > div > input:not(:placeholder-shown) {
  width: 220px;
}
</style>
