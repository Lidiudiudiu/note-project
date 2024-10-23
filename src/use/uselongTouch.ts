import type { Ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';

export default function(arr: Ref<null | HTMLElement>[], callbacks: (id: string) => void) {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let isMoving = false;

    const getId = (e: TouchEvent | MouseEvent): string => {
        return (e.target as HTMLElement).id;
    };

    const touchStart = (e: TouchEvent | MouseEvent) => {
        const id = getId(e);
        isMoving = false; // 重置移动状态

        timer = setTimeout(() => {
            if (!isMoving) {
                callbacks(id);
            }
        }, 500);
    };

    const touchEnd = () => {
        clearTimeout(timer as ReturnType<typeof setTimeout>);
        isMoving = false;
    };

    const touchMove = () => {
        isMoving = true;
    };

    onMounted(() => {
        arr.forEach(item => {
            item.value?.addEventListener('touchstart', touchStart);
            item.value?.addEventListener('touchend', touchEnd);
            item.value?.addEventListener('touchmove', touchMove);
            item.value?.addEventListener('mousedown', touchStart);
            item.value?.addEventListener('mouseup', touchEnd);
            item.value?.addEventListener('mousemove', touchMove);
        });
    });

    onUnmounted(() => {
        arr.forEach(item => {
            item.value?.removeEventListener('touchstart', touchStart);
            item.value?.removeEventListener('touchend', touchEnd);
            item.value?.removeEventListener('touchmove', touchMove);
            item.value?.removeEventListener('mousedown', touchStart);
            item.value?.removeEventListener('mouseup', touchEnd);
            item.value?.removeEventListener('mousemove', touchMove);
        });
    });
}
