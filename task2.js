/*2. Минимальный сдвиг
Найти минимальное количество сдвигов массива a, после которых он будет равен массиву b.
Сдвиг можно осуществлять в любую сторону.
Вывести -1, если такой сдвиг не существует.
На вход подается две строки длины a и b. 1 <= a, b <= 10000

Пример
> node task.js '1234' '2341'
> 1 */
function shift(arrA, arrB) {
  if (arrA.length < arrB.length) return -1;
  let count = arrA.join('').indexOf(arrB.join(''));
  if (count !== -1) return count;
  for (let i = 0; i < arrA.length; ++i) {
    shiftArray(arrA);
    count = arrA.join('').indexOf(arrB.join(''));
    if (count !== -1) return count + i + 1;
  }
}

function shiftArray(array) {
  const firstElem = array.shift();
  array.push(firstElem);
}

const strA = process.argv[2];
const strB = process.argv[3];
console.log(shift(strA.split(''), strB.split('')));
