import type {Ref} from 'vue'
export default function useLoadMore(element:Ref<null | HTMLElement>,fn :() => void) {
    function loadMore() {
        const containerHeight = element.value?.clientHeight
        const scrollTop = element.value?.scrollTop
        const scrollHeight = element.value?.scrollHeight

        if (containerHeight! + scrollTop! + 10 >= scrollHeight!) {
            fn()
        }
    }
    element.value?.addEventListener('scroll',loadMore)
}