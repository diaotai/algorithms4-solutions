/**
 * 编写一个 stack 的用例 Parenttheses，从标准输入中读取宇哥文本流并使用栈判定其中的括号是否匹配完整。例如[()]{}{[()()]}程序应该打印 true,对于 [(])应该打印 false
 */

function judgeParentheses(str: string): boolean {
    const parenthesesMap = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    const stack: string[] = [];
    for (const symbol of str) {
        if(symbol in parenthesesMap) {
            if (stack.length === 0 || parenthesesMap[symbol] !== stack.pop()) {
                return false;
            }
        } else {
            stack.push(symbol);
        }
    }
    return true;
}

function main() {
    const teststr0 = '[()]{}{[()()]}';
    const teststr1 = '[(])';
    console.log(judgeParentheses(teststr0));
    console.log(judgeParentheses(teststr1)); 
}

main();