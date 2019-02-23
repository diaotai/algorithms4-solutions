/**
 *  将中序表达式转换为后续表达式
 * 
 * 
    1）当输入的是操作数时候，直接输出到后序表达式PostfixExp序列中

    2）当输入开括号时候，把它压栈

    3）当输入的是闭括号时候，先判断栈是否为空，若为空，则发生错误并进行相关处理。若非空，把栈中元素依次弹出并输出到Postfix中，知道遇到第一个开括号，若没有遇到开括号，也发生错误，进行相关处理

    4）当输入是运算符op（+、- 、×、/）时候

    a)循环，当（栈非空and栈顶不是开括号and栈顶运算符的优先级不低于输入的运算符的优先级）时，反复操作：将栈顶元素弹出并添加到Postfix中

    b)把输入的运算符op压栈

    5）当中序表达式InfixExp的符号序列全部读入后，若栈内扔有元素，把他们依次弹出并放到后序表达式PostfixExp序列尾部。若弹出的元素遇到空括号，则说明不匹配，发生错误，并进行相关处理

 */
function infixToPostfix(str: string): string {
    const stack: string[] = [];
    let result = '';
    for(const symbol of str.split(' ')) {
        if('+-*/('.indexOf(symbol) !== -1) {
            while(stack.length && stack[stack.length - 1] !== '(' && getOperatorPrior(stack[stack.length - 1]) >= getOperatorPrior(symbol)) {
                result += ` ${stack.pop()}`;
            }   
            stack.push(symbol);
        } else if (symbol === ')') {
            while(stack.length !== 0 ) {
                const tempSymbol = stack.pop();
                if (tempSymbol === '(') {
                    break;
                } else {
                    result += ` ${tempSymbol}`;
                }
            }
        } else {
            result += ` ${symbol}`;
        }
    }
    return result;
}

function getOperatorPrior(operator: string): number {
    const operatorPriorMap = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    }
    return operatorPriorMap[operator];
}

function main10() {
    const testStr = '( 23 + 34 * 45 / ( 5 + 6 + 7 ) )';
    console.log(infixToPostfix(testStr) === ' 23 34 45 * 5 6 + 7 + / +');
}

main10();