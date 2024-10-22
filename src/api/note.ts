import axios from ".";

export function getNotes<T>(page:number,size:number) {
  return axios.get<T>(`/note/page/${page}/${size}`) as Promise<T>
}

export function addNotes<T>(note:T) {
  return axios.post<T>('/note',note)
}

export function getNotesListByContent<T>(content:string) {
  return axios.get<T>(`/note/content/${content}`) as Promise<T>
}

export function updateNote<T>(id:string,note:T) {
  return axios.put(`/note/${id}`,note) as Promise<T>
}