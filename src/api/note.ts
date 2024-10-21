import axios from ".";

export function getNotes(page:number,size:number) {
  return axios.get(`/note/page/${page}/${size}`);
}