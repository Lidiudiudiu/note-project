<script lang="ts" setup>
import { reactive } from 'vue';
import { useListStore } from '@/stores/notelist';
import { showSuccessToast } from 'vant';
import { useRouter } from 'vue-router'
const ListStore = useListStore()
const router = useRouter()
const state = reactive({
    note: {
        content: '',
        dates: ''
    }
})
const date = new Date()
const doAddNotes = () => {
    state.note.dates = `${date.getFullYear()} 年 ${date.getMonth() + 1} 月 ${date.getDate()} 日`
    ListStore.addNoteList(state.note).then((res) => {
        if (res) {
            showSuccessToast('添加成功')
            router.push('/')
        }
    })
}
</script>

<template>
    <div class="add-note-box">
        <van-nav-bar left-arrow>
            <template #right>
                <van-icon name="success" size="18" @click="doAddNotes"></van-icon>
            </template>
        </van-nav-bar>
        <van-field class="filed" rows="1" autosize type="textarea" placeholder="请输入内容"
            v-model="state.note.content"></van-field>
    </div>
</template>

<style lang="scss" scoped>
.add-note-box {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
    background: #fff;

    .field {
        font-size: 0.22rem;
    }
}
</style>
