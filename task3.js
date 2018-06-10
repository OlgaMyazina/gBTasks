/* Task 3*/

function formatSum(t1, t2) {
  const sum = +t1 + +t2;
  const hour = Math.floor(sum / 3600);
  const min = Math.floor((sum - hour * 3600) / 60);
  const sec = sum - hour * 3600 - min * 60;

  if (hour === 0) {
    if (min === 0) return `${formatSec(sec)}`;
    return `${formatMin(min)} ${formatSec(sec)}`;
  }
  return `${formatHour(hour)} ${formatMin(min)} ${formatSec(sec)}`;
}

function textTime(count, first, second, fifty) {
  if (count % 100 > 4 && count % 100 < 20) return fifty;
  else if (count % 10 < 5) {
    const names = [fifty, first, second, second, second, fifty];
    return names[count % 10];
  } else return fifty;
}

function formatSec(sec) {
  return `${sec} ${textTime(sec, 'секунда', 'секунды', 'секунд')}`;
}
function formatMin(min) {
  return `${min} ${textTime(min, 'минута', 'минуты', 'минут')}`;
}
function formatHour(hour) {
  return `${hour} ${textTime(hour, 'час', 'часа', 'часов')}`;
}

const t1 = process.argv[2];
const t2 = process.argv[3];

process.stdout.write(formatSum(t1, t2));
