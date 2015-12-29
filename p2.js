// Fib sequence: sum of the even valued terms less than 4m
"use strict";
var result = 2;
(function fib(a, b) {
    let sum = a + b;
    if (sum > 4000000) return;
    if((sum & 1) === 0) {
        result = result + sum;
    }
    fib(b, sum);
} (1, result));

console.log(result);