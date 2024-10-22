import { defineStore } from 'pinia'
import type {Note,NoteList} from '@/types'
import {getNotes,addNotes,getNotesListByContent} from '@/api/note'
export const useListStore = defineStore('list', {
    state: () => {
        return {
            list: [] as Note[]
        }
    },
    actions: {
        async getNoteList() {
            const res = await getNotes<NoteList>(1,50)
            this.list = res
            return res
        },
        async addNoteList(payload:Note) {
            return await addNotes<Note>(payload)
        },
        async getNotesListSearch(payload:string) {
            const res = await getNotesListByContent<NoteList>(payload)
            this.list = res
            return res 
        }
    }
})
