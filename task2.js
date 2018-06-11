/* Task 2*/

function shift(strA, strB) {
  if (strA.length < strB.length) return -1;
  let resultCount = strA.indexOf(strB);
  let count = cicle(strA, strB, shiftStr);
  if ((count !== -1 && count < resultCount) || resultCount === -1)
    resultCount = count;
  count = cicle(strA, strB, shiftBackStr);
  if ((count !== -1 && count < resultCount) || resultCount === -1)
    resultCount = count;
  return resultCount;
}

function shiftStr(str) {
  str = str.slice(1) + str.slice(0, 1);
  return str;
}

function shiftBackStr(str) {
  str = str.slice(-1) + str.slice(0, -1);
  return str;
}

function cicle(strA, strB, funcName) {
  let str = strA;
  let count = str.indexOf(strB);
  for (let i = 1; i < strA.length; ++i) {
    str = funcName(str);
    count = str.indexOf(strB);
    if (count !== -1) return count + i;
  }
  return count;
}

const strA = process.argv[2];
const strB = process.argv[3];
process.stdout.write(shift(strA, strB).toString());
