/**
 * Josephus problem. In the Josephus problem from antiquity, N people are in dire straits and agree to the following strategy 
 * to reduce the population. They arrange themselves in a circle (at positions numbered from 0 to N-1) 
 * and proceed around the circle, eliminating every Mth person until only one person is left. Legend 
 * has it that Josephus figured out where to sit to avoid being eliminated. Write a Queue client Josephus.
 * java that takes M and N from the command line and prints out the order in which people are eliminated (and thus would show Josephus where to sit in the circle).
 */ 

 function josephus(m: number, n: number): number[] {
    const result: number[] = [];
    const queue: number[] = [];

    for(let i = 0; i < m; i++) {
        queue.push(i);
    }

    let count = 1;
    while(queue.length) {
        if (count % n === 0) {
            result.push(queue.shift())
        } else {
            queue.push(queue.shift());
        }
        count++;
    }
    return result;
 }

(function () {
     console.log(josephus(7, 2));
})()

