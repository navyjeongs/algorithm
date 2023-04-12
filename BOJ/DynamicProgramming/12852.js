const N = +require("fs").readFileSync("input.txt").toString().trim();

const calArr = new Array(N + 1).fill(-1);
const stepArr = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  calArr[i] = calArr[i - 1] + 1;
  stepArr[i] = i - 1;
  if (i % 2 === 0 && calArr[i] > calArr[i / 2] + 1) {
    calArr[i] = calArr[i / 2] + 1;
    stepArr[i] = i / 2;
  }
  if (i % 3 === 0 && calArr[i] > calArr[i / 3] + 1) {
    calArr[i] = calArr[i / 3] + 1;
    stepArr[i] = i / 3;
  }
}

console.log(calArr[N]);

let start = N;
let answer = [];
answer.push(start);
while (start !== 1) {
  start = stepArr[start];
  answer.push(start);
}

console.log(...answer);
