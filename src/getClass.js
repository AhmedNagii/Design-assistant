export default function getClass(i) {
    if (i % 7 === 0) {
        return 'tall';
    }
    else if (i % 6 === 0) {
        return 'short';
    }
}