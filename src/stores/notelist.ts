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
        async getNoteList(page:number,size:number) {
            const res = await getNotes<NoteList>(page,size)
            if (page === 1) {
                this.list = res
            } else {
                this.list.push(...res)
            }
            return [...this.list]
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
