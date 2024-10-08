'use strict';






//Задача 1. Разработайте функцию, которая принимает целое число в качестве аргумента и возвращает строку, содержащую это число и слово "компьютер" в нужном склонении по падежам в зависимости от числа. Например, при вводе числа 25 функция должна возвращать "25 компьютеров", для числа 41 — "41 компьютер", а для числа 1048 — "1048 компьютеров".
//

function nounModification(n) {
    let myNum = String(n);

    if (n == 1 || (n > 20 & myNum[myNum.length - 1] == 1)) {
        console.log(n + ' компьютер');
    }

    else if ((n > 20 || n < 10) & ['2', '3', '4'].includes(myNum[myNum.length - 1])) {
        console.log(n + ' компьютера');
    }

    else {
        console.log(n + ' компьютеров');
    }
}

nounModification(100284);


/*Задача 2. Написать функцию/метод, которая на вход получает массив положительных целых чисел произвольной длины. 
Например [42, 12, 18]. На выходе возвращает массив чисел, которые являются общими делителями для всех указанных числе. В примере это будет [2, 3, 6].
*/

function commonDeviders(myArray) {
    let deviders = [];
    let min = Math.min(...myArray);
    let count = 0;
    for (let i = 2; i <= min; i++) {
        for (let j = 0; j < myArray.length; j++) {
            if (myArray[j] % i == 0) {
                count++;
            }
        }
        if (count == myArray.length) {
            deviders.push(i);
        }
        count = 0;
    }
    console.log(deviders);
}
commonDeviders([48, 12, 36, 60]);



/*
Задача 3. Написать функцию/метод, которая возвращает массив простых чисел в диапазоне (2 числа - минимальное и максимальное) заданных чисел.
Например, на вход переданы 2 числа: от 11 до 20  (диапазон считается включая граничные значения).
На выходе программа должна выдать [11, 13 , 17, 19]
*/

function simpleNums(n, m) {
    let simples = [];
    let count = 0;
    for (let i = n; i <= m; i++) {
        for (let j = 2; j < i / 2 + 1; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if (count == 0) {
            simples.push(i);
        }
        count = 0;
    }
    console.log(simples);
}

simpleNums(4, 200);

/*
Задача 4. Написать метод, который в консоль выводит таблицу умножения. На вход метод получает число, до которого выводит таблицу умножения. В консоли должна появиться таблица. Например, если на вход пришло число 5, то получим:
*/
function multiplyTable(n) {


    let twoDArray = [...Array(n + 1)].map(x => Array(n + 1));
    for (let i = 0; i <= n; i++) {
        twoDArray[0][i] = i;
        twoDArray[i][0] = i;
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            twoDArray[i][j] = i * j;
        }


    } console.log(twoDArray);
}
multiplyTable(5);