process.stdout.write('hello from spinner2.js... \rheyyy\n');

// store each animation character as an element in an array
const animationArr = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

// create variable to store delay that will be incremented on every loop
let delay = 100;

// create a loop that iterates for the length of the array and prints out element of array
for (let animationEl of animationArr) {
  setTimeout(() => {
    process.stdout.write(`\r${animationEl}   `);
  }, delay += 200);
}


/*
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ')
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\ ')
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   ')
}, 1700);

*/