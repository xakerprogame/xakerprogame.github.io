'use strict';

/**
 * Функция для возведения в степень
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень.
 * @return {number} result , возведённое в n-ную степень. 
 */
function pow(x, n) {
    let result = 1;
    if (n < 0) {
        for (let i = n; i < 0; i++) {
            result /= x;
        }
    } else {
        for (let i = 1; i <= n; i++) {
            result *= x;
        }
    }
    return result;
}

/**
 * @param {number} n число до которого ведётся сумма
 * @param {number} n Число для суммы от 1 до n.
 */
function sumTo(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i;
    }
    return result;
}

/** 
 * @param {number} n Число для факториала 
 * @return {number}  - возращает n-1 для рекурсивного умножения до 1 
 */
function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

/**
 * @param {number} n, Число для ряда Фибоначчи
 * @return {bigint} b, n-ное число Фибоначи
 */
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

/**
 * @param {number} x - число х
 * @param {number} y - число y
 * @return {function} - функция сравнения
 */
function compare(x) {
    let result = function () {
        if (y > x) return true
        else if (y < x) return false
        else return null;
    }
    return result;
}

/**
 * @param {number} num - число
 * @param {number} cols - количество столбцов 
 * @returns {string} - на вывод
 */
function printNumbers(num, cols) {
    let str1 = ""
    let rows = Math.ceil(num / cols);
    for (let row = 0; row < rows; row++) {
        let str = '';
        for (let col = 0; col < cols; col++) {
            if ((row + rows * col) < num)
                str += (row + rows * col) + ' ';
        }
        str1 += str + "\n";
    }
    return str1;
}