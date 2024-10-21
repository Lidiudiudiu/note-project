<script setup lang="ts">
import { getNotes } from '@/api/note'
import { ref } from 'vue'
import type { NoteList } from '@/types';
const noteValue = ref([] as NoteList)
getNotes<NoteList>(1, 10).then(res => {
    noteValue.value = res
})

</script>

<template>
    <div>list</div>
</template>
