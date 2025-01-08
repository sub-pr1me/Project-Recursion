#!/usr/bin/env node

function mergeSort(arr){
    let result = [];
    let x = arr.length;
    if (x === 1) return arr;
    
    let one = mergeSort(arr.toSpliced(x/2, x/2));
    let two = mergeSort(arr.toSpliced(0, x/2));

    result.push(one);
    result.push(two);

    return result.flat().sort((a,b) => a-b);    
};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));