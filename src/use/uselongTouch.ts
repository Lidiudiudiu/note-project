import type { Ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'

export default function(arr: Ref<null | HTMLElement>[], callbacks: (id: string) => void) {
    let timer: ReturnType<typeof setTimeout> | null = null
    let isMoving = false

    const touchStart = (e: TouchEvent) => {
        const id = (e.targetTouches[0].target as HTMLElement).id
        timer = setTimeout(() => {
            if (!isMoving) {
                callbacks(id)
            }
        }, 1000)
    }

    const touchEnd = () => {
        clearTimeout(timer as ReturnType<typeof setTimeout>)
        isMoving = false
    }

    const touchMove = () => {
        isMoving = true
    }

    onMounted(() => {
        arr.forEach(item => {
            item.value?.addEventListener('touchstart', touchStart)
            item.value?.addEventListener('touchend', touchEnd) // 注意事件名称应为 'touchend'
            item.value?.addEventListener('touchmove', touchMove) // 注意事件名称应为 'touchmove'
        })
    })

    onUnmounted(() => {
        arr.forEach(item => {
            item.value?.removeEventListener('touchstart', touchStart)
            item.value?.removeEventListener('touchend', touchEnd) // 注意事件名称应为 'touchend'
            item.value?.removeEventListener('touchmove', touchMove) // 注意事件名称应为 'touchmove'
        })
    })
}
