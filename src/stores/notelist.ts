import { defineStore } from 'pinia'
import type {Note,NoteList} from '@/types'
import {getNotes} from '@/api/note'
export const useListStore = defineStore('list', {
    state: () => {
        return {
            list: [] as Note[]
        }
    },
    actions: {
        async getNoteList() {
            const res = await getNotes<NoteList>(1,10)
            this.list = res
            return res
        }
    }
})
