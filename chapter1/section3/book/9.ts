/**
 * 编写一道程序，从标准输入得到一个缺少左括号的表达式并打印出补全括号之后的中序表达式。例如，给定输入:1 + 2 ) * 3 - 4 ) * 5 - 6 ) ) ) 你的程序应该输出((1 + 2) * ((3 - 4) * (5 - 6)))
 */

function completeString(str: string): string {
    const valStack: string[] = [];
    const oprStack: string[] = [];
    const oprSet: string = '/*+-';

    for (const symbol of str) {
        if (oprSet.indexOf(symbol) !== -1) {
            oprStack.push(symbol);
        } else if (symbol !== ')') {
            valStack.push(symbol);
        } else {
            const operator = oprStack.pop();
            const val2 = valStack.pop();
            const val1 = valStack.pop();
            const temp = `(${val1}${operator}${val2})`;
            valStack.push(temp);
        }
    }

    while (oprStack.length) {
        const operator = oprStack.pop();
        const val2 = valStack.pop();
        const val1 = valStack.pop();
        const temp = `(${val1}${operator}${val2})`;
        valStack.push(temp);
    }
    return valStack.pop();
}

function main9() {
    const testStr = '1+2)*3-4)*5-6)))';
    console.log(completeString(testStr) === '((1+2)*((3-4)*(5-6)))');
}

main9();