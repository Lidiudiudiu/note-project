<script lang="ts" setup>
import { reactive, onMounted } from 'vue';
import { useListStore } from '@/stores/notelist';
import { showSuccessToast } from 'vant';
import { useRouter, useRoute } from 'vue-router'
const ListStore = useListStore()
const router = useRouter()
const state = reactive({
    note: {
        content: '',
        dates: ''
    },
    oldContent: '',
    id: ''
})
const date = new Date()
const doAddNotes = () => {
    state.note.dates = `${date.getFullYear()} 年 ${date.getMonth() + 1} 月 ${date.getDate()} 日`
    if (state.id) {
        if (state.oldContent !== state.note.content) {
            const payload = { id: state.id, note: state.note }
            ListStore.updateNoteList(payload).then(res => {
                if (res) {
                    showSuccessToast('更新成功')
                    router.push('/')
                }
            })
        }
    } else {
        ListStore.addNoteList(state.note).then((res) => {
            if (res) {
                showSuccessToast('添加成功')
                router.push('/')
            }
        })
    }

}
const route = useRoute()
const initNote = () => {
    const id = route.query.id
    if (!id) return
    ListStore.list.forEach(item => {
        if (item._id == id) {
            state.note.content = item.content
            state.oldContent = item.content
            state.id = id
        }
    })
}

onMounted(() => {
    initNote()
})

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
