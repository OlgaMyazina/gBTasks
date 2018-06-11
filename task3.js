/* Task 3*/

function formatSum(t1, t2) {
  const sum = t1 + t2;
  const hour = Math.floor(sum / 3600);
  const min = Math.floor((sum - hour * 3600) / 60);
  const sec = sum - hour * 3600 - min * 60;

  const result = `${hour === 0 ? '' : formatHour(hour)} ${
    min === 0 ? '' : formatMin(min)
  }${sec === 0 ? '' : formatSec(sec)}`;
  return result.trim();
}

function textTime(count, first, second, fifth) {
  if (count % 100 > 4 && count % 100 < 20) return fifth;
  else if (count % 10 < 5) {
    const names = [fifth, first, second, second, second];
    return names[count % 10];
  } else return fifth;
}

function formatSec(sec) {
  return `${sec} ${textTime(sec, ...wordSec)}`;
}
function formatMin(min) {
  return `${min} ${textTime(min, ...wordMin)} `;
}
function formatHour(hour) {
  return `${hour} ${textTime(hour, ...wordHour)}`;
}

const t1 = +process.argv[2];
const t2 = +process.argv[3];
const wordHour = ['час', 'часа', 'часов'];
const wordMin = ['минута', 'минуты', 'минут'];
const wordSec = ['секунда', 'секунды', 'секунд'];

process.stdout.write(formatSum(t1, t2));
