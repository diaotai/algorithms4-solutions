export function generateArrayWithNITems(n: number, item: any): any[] {
    const result = [];
    for (let i = 0;i < n; i++) {
        result.push(item)
    };
    return result;
}

export function getRandomInt(low: number, high: number): number {
    return low + Math.floor(Math.random() * (high - low));
}