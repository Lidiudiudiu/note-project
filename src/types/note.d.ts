export interface Note {
  _id?: string
  dates: string
  content:string
}

export type NoteList = Note[]

export interface NoteListState {
  leftList: Note[]
  rightList: Note[]
}