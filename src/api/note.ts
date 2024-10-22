import axios from ".";

export function getNotes<T>(page:number,size:number) {
  return axios.get<T>(`/note/page/${page}/${size}`) as Promise<T>
}

export function addNotes<T>(note:T) {
  return axios.post<T>('/note',note)
}