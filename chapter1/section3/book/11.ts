/**
 *  获取一个后序表达式计算其值
 */

 function evaluatePostfix(str: string): number {
     const stack: number[] = [];
     for(const symbol of str.split(' ')) {
         if ('+-*/'.indexOf(symbol) !== -1) {
            const val2 = stack.pop();
            const val1 = stack.pop();
            switch (symbol) {
                case '+':
                    stack.push(val1 + val2);
                    break;
                case '-':
                    stack.push(val1 - val2);
                    break;
                case '*':
                    stack.push(val1 * val2);
                    break;
                case '/':
                    stack.push(val1 / val2);
                    break;
            }
         } else {
             stack.push(Number(symbol));
         }
     }
     return stack.pop();
 }

 function main11() {
    const testStr = '23 34 45 * 5 6 + 7 + / +';
    console.log(evaluatePostfix(testStr));
 }

 main11();