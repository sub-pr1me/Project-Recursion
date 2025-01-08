#!/usr/bin/env node

function fibs(n) {    
    let arr =[];    
    for (let i = 0; i < n; i++) {       
        let x = arr.length;
        if (i<2) {
          arr.push(i);
        } else {
          arr.push(arr[x-1] + arr[x-2])
        };
    };    
    return arr;
};
console.log(fibs(8));


function fibsRec(n) {
    if (n<=0) return [];
    const x = (n) => {
        return (n<2) ? n : (x(n-1) + x(n-2));
        };
    return fibsRec(n-1).concat(x(n-1));
};
console.log(fibsRec(8));