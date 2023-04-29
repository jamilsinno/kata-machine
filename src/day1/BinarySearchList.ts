export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        let mid = Math.floor(low + (high - low) / 2)

        if (haystack[mid] === needle) {
            return true
        } else if (needle > haystack[mid]) {
            low = mid + 1
        } else {
            high = mid
        }
    } while (low < high)

    return false
}