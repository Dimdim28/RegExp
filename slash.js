'use strict'
/*
Регулярные выражения!
. - любой одиночный символ
[ ] - любой из них, диапазоны
$ - конец строки
^ - начало строки
\ - экранирование
\d - любую цифру
\D - все что угодно, кроме цифр
\s - пробелы
\S - все кроме пробелов
\w - буква
\W - все кроме букв
\b - граница слова
\B - не границ

Квантификация
n{4} - искать n подряд 4 раза
n{4,6} - искать n от 4 до 6
* от нуля и выше
+ от 1 и выше
? - нуль или 1 раз

флаги
i
С этим флагом поиск не зависит от регистра: нет разницы между A и a 
g
С этим флагом поиск ищет все совпадения, без него – только первое.
m
Многострочный режим 
s
Включает режим «dotall», при котором точка . может соответствовать символу перевода строки \n 
u
Включает полную поддержку юникода. Флаг разрешает корректную обработку суррогатных пар 
y
Режим поиска на конкретной позиции в тексте 
*/

let line = "Hello everyone brothers!!"; 
console.log(line.replace(/\severyone\s/g,"-replace-"));
console.log(line);

const ESCAPE1 = /i/s;
const ESCAPE2 = /\severyone\s/;

console.log(line.split(/\s/));
console.log(line.search(/Hello/));//вернет первый индекс
console.log('12-54-61'.replace(/-/g,/fuck you/));

console.log("1847,4734654,121,353,65".match(/\d{5}/g));// вернет массив совпадений
console.log(line.match(ESCAPE1));//вернет первое
console.log(line.match(ESCAPE2));// совпадение
console.log(line.match(/\w{6}/));

let str = "html and css";
let result1 = str.replace(/[html,css]/gi, str => str.toUpperCase());
console.log(result1);
let result2 = str.replace(/html|css/gi, str => str.toUpperCase());
console.log(result2);
let line2 = 'valera 1873 sergey 537145 anton 82746';
console.log(line2.match(/\d{5}./g));
let line3 = '1  54 af a';
console.log(line3.match(/\d+/gi));
console.log(line3.match(/\a{1,}/gi));
let line4 = 'hello Hello heLlo HELLO';
console.log(line4.match(/hello/gi));

let matches = "JavaScript".match(/HTML/) || [];
if (!matches.length) {
  console.log("Совпадений нет"); //  работает
}

let str2 = "Я ЛюБлЮ JavaScript";//тест вернет тру если есть хоть 1 совпадение
let regexp = /люблю/i;
console.log( regexp.test(str2)); // true


//При работе с регуляркой найденные сочетания "обрезают" до конца найденного строку для дальнейшего поиска, поэтому "вложенные" совпадения могут не найтись:

let str3 = 'проверка';
let arr = str3.match( /../g); // точка - это любой символ, тут ищутся два любых символа подряд
console.log(arr); // ["пр", "ов", "ер", "ка"]
// не найдены 'ро', 'ве', 'рк'
//Просто имейте в виду.

let str4 = 'Больше о JavaScript на https://javascript.info';
let regexp2 = /javascript/ig;

let result3;
while (result3= regexp2.exec(str4)) {
  console.log( `Найдено ${result3[0]} на позиции ${result3.index}` );
  // Найдено JavaScript на позиции 9, затем
  // Найдено javascript на позиции 31
}

/*var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);

// пример с русскими буквами
var re = /([а-яё]+)\s([а-яё]+)/i;
var str = 'Джон Смит';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);*/