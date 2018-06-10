/* Task 2*/

function shift(strA, strB) {
  if (strA.length < strB.length) return -1;
  let count = strA.indexOf(strB);
  if (count !== -1) return count;
  for (let i = 0; i < strA.length; ++i) {
    strA = shiftStr(strA);
    count = strA.indexOf(strB);
    if (count !== -1) return count + i + 1;
  }
  return -1;
}

function shiftStr(str) {
  str = str.slice(1) + str.slice(0, 1);
  return str;
}

const strA = process.argv[2];
const strB = process.argv[3];
process.stdout.write(shift(strA, strB).toString());
