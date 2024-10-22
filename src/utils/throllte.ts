export function throllte<T extends unknown[]>(fn: (...args: T) => void, wait: number) {
    let date = 0
    return function(...args: T) {
        const now = Date.now()
        if (now - date > wait) {
            fn(...args)
            date = now
        }
    };
}
