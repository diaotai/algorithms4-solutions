/**
 * 检测一个排列能否被栈生成
 */

function checkoutStackGenerability(array: number[]) {
    let index = 0;
    const stack: number[] = [];
    for(let num of array) {
        while(num >= index) {
            stack.push(index++);
        }
        if (stack[stack.length - 1] === num) {
            stack.pop();
        }
        if (stack.indexOf(num) !== -1) {
            return false;
        }
    }
    return true;
}

function praseStringIntoNumberArray(str: string): number[] {
    return str.split(' ').map((letter) => Number(letter));
} 

(function() {
    const testStr0 = '4 3 2 1 0 9 8 7 6 5';
    const testStr1 = '4 6 8 7 5 3 2 9 0 1';
    console.log(checkoutStackGenerability(praseStringIntoNumberArray(testStr0)));
    console.log(checkoutStackGenerability(praseStringIntoNumberArray(testStr1))); 
})() 