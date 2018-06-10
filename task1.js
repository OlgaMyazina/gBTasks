/* Task 1 */

const strIn = process.argv[2];
const re = /\[Р|Н|К|р|н|к]/gi;
process.stdout.write(strIn.replace(re, ''));
