"use strict";

function getDecimal(num) {
    let a = num.slice(num.indexOf("."));
    if (a == Math.abs(Math.trunc(num) % 10)) {
        return 0;
        exit;
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
    if (viagra >= 0 || xxx >= 0) {
        return true;
    } else {
        return false;
    }
}

function truncate(str, maxlength) {
    if (str.length > maxlength)
        str = str.slice(0, maxlength - 1) + '\u{2026}';
    return str;
}

function camelize(str) {
    str = str.split('-');
    let strnew = "";
    for (let i = -1; i < str.length; i++) {
        let strol = str[i];
        strnew += ucFirst(strol);
    }
    return strnew[0].toLowerCase() + strnew.slice(1);
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

function sum(n) {
    if(n == '' || n == null){
        return 0;
        exit;
    }
    let a = [];
    n = n.split(',');
    for (let i = 0; i < n.length; i++) {
        let s = parseInt(n[i]);
        a.push(s);
    }
    let s = 0;
    for (let i = 0; i < a.length; i++){
        s += a[i];
     }
     return s;
  }