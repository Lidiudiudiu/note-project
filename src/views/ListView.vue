<script setup lang="ts">
import { getNotes } from '@/api/note'
getNotes(1, 10).then(res => {
    console.log(res)
})

</script>

<template>
    <div>list</div>
</template>
