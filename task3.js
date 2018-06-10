/*Сложение временных промежутков
Сложить 2 временных промежутка и вывести общую длительность в человекочитаемом виде.
В выводе использовать часы, минуты и секунды (при необходимости).
На вход подается два числа t1 и t2, разделенные пробелом. 1 <= t1, t2 <= 100000

Пример
> node task.js 1 1
> 2 секунды
> node task.js 3600 3599
> 1 час 59 минут 59 секунд*/

function formatSum(t1, t2) {
  const sum = +t1 + +t2;
  const hour = Math.floor(sum / 3600);
  const min = Math.floor((sum - hour * 3600) / 60);
  const sec = sum - hour * 3600 - min * 60;

  if (hour === 0) {
    if (min === 0) return `${sec} ${countSec(sec)}`;
    return `${min} ${countMin(min)} ${sec} ${countSec(sec)}`;
  }
  return `${hour} ${countHour(hour)} ${min} ${countMin(min)} ${sec} ${countSec(
    sec
  )}`;
}

function countHour(count) {
  if (count % 100 > 4 && count % 100 < 20) return 'часов';
  else if (count % 10 < 5) {
    const names = ['часов', 'час', 'часа', 'часа', 'часа', 'часов'];
    return names[count % 10];
  } else return 'часов';
}

function countMin(count) {
  if (count % 100 > 4 && count % 100 < 20) return 'минут';
  else if (count % 10 < 5) {
    const names = ['минут', 'минута', 'минуты', 'минуты', 'минуты', 'минут'];
    return names[count % 10];
  } else return 'минут';
}

function countSec(count) {
  if (count % 100 > 4 && count % 100 < 20) return 'секунд';
  else if (count % 10 < 5) {
    const names = [
      'секунд',
      'секунда',
      'секунды',
      'секунды',
      'секунды',
      'секунд'
    ];
    return names[count % 10];
  } else return 'секунд';
}

const t1 = process.argv[2];
const t2 = process.argv[3];

console.log(formatSum(t1, t2));
