"use strict";

function getDecimal(num) {
    num = String(num);
    let a = num.slice(num.indexOf("."));
    if (a == Math.abs(Math.trunc(num) % 10)) {
        return 0;
    }
    let str = 0 + a;
    if (num < 0) {
        str = 1 - str;
    }
    return str;
}

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function checkSpam(str) {
    let strLower = str.toLowerCase();
    let viagra = strLower.indexOf('viagra');
    let xxx = strLower.indexOf('xxx');
    return viagra >= 0 || xxx >= 0
}

function truncate(str, maxlength) {
    if (str.length > maxlength)
        str = str.slice(0, maxlength - 1) + '\u{2026}';
    return str;
}

function camelize(str) {
    str = str.split('-');
    let strnew = str[0];
    for (let i = 1; i < str.length; i++) {
        strnew += ucFirst(str[i]);
    }
    return strnew;
}

function fib(n) {
    let a = 1n,
        b = 0n;
    for (let i = 0n; i < n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function fibs(n) {
    let fib1 = [];
    for (let i = 0; i < n; i++) {
        fib1.push(fib(i));
    }
    return fib1;
}

function arrReverseSorted(arr) {
    let a = [];
    arr = arr.split(',');
    for (let i = 0; i < arr.length; i++) {
        a.push(arr[i]);
    }
    return a.sort((a, b) => b - a);
}

function sum(...array) {
    let sum = 0;
    for (let i of array)
        sum += i;
    return sum;
}