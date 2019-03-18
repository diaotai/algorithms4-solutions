export function test(sort: (m: string, n: string) => number) {
    const text = 'AABRAACADABRAACAADABRA';
    const pattern = 'AACAA';
    console.log(sort(text, pattern) === 12);
}