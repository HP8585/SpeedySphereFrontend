<script setup>
const { fetchEmojis, emojis, searchInput, emojisShown } = fetchEmojisInit();

onMounted(()=>{
    fetchEmojis();
    window.addEventListener('click', ()=>{
        emojisShown.value = false;
    })
});


</script>

<template>
<div class="emojiMain scrollbar-thin scrollbar-thumb-slate-700 scrollbar-thumb-rounded" v-show="emojisShown" @click.stop="emojisShown=true">
    <input id="emojiSearch" type="text" class="emojiSearch" v-model="searchInput" placeholder="Search">

    <ul class="grid grid-cols-12 py-2">
        <li v-for="(item, index) in emojis" :key="index" 
        :emoji-slug="item?.slug"
        @click="states().value.message+= item?.character"
>
        {{ item?.character }}
        </li>

    </ul>

</div>
</template>

<style scoped>
.emojiMain{
    @apply absolute bg-slate-200 max-h-96 max-w-[22em] overflow-hidden -top-[25em]
    rounded dark:bg-slate-800 overflow-y-scroll px-4 py-2
}
.emojiMain ul > li{
    @apply select-none cursor-pointer
}
/**emoji search */
.emojiSearch{
    @apply bg-slate-300 rounded w-full px-2 py-0.5 outline-none
    focus:ring-2 ring-violet-500
}
</style>