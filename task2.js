/*2. Минимальный сдвиг
Найти минимальное количество сдвигов массива a, после которых он будет равен массиву b.
Сдвиг можно осуществлять в любую сторону.
Вывести -1, если такой сдвиг не существует.
На вход подается две строки длины a и b. 1 <= a, b <= 10000

Пример
> node task.js '1234' '2341'
> 1 */
function shift(strA, strB) {
  if (strA.length < strB.length) return -1;
  let count = strA.indexOf(strB);
  if (count !== -1) return count;
  for (let i = 0; i < strA.length; ++i) {
    strA = shiftString(strA);
    count = strA.indexOf(strB);
    if (count !== -1) return count + i + 1;
  }
  return -1;
}

function shiftString(str) {
  str = str.slice(1) + str.slice(0, 1);
  return str;
}

const strA = process.argv[2];
const strB = process.argv[3];
console.log(shift(strA, strB));
