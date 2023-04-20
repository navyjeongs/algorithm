const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);

let dpIncrease = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dpIncrease[i] = Math.max(dpIncrease[i], dpIncrease[j] + 1);
    }
  }
}

let dpDecrease = new Array(N).fill(1);

for (let i = N - 2; i >= 0; i--) {
  for (let j = N - 1; i < j; j--) {
    if (arr[j] < arr[i]) {
      dpDecrease[i] = Math.max(dpDecrease[i], dpDecrease[j] + 1);
    }
  }
}

let answer = 0;
for (let i = 0; i < N; i++) {
  answer = Math.max(answer, dpIncrease[i] + dpDecrease[i]);
}

console.log(answer - 1);
