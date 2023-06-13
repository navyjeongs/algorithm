const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

const N = +input[0];
const arr = [...input[1].split(" ").map(Number)];

let start = 0;
let end = N - 1;

let min = Infinity;

let left;
let right;
while (start < end) {
  if (min > Math.abs(arr[start] + arr[end])) {
    min = Math.abs(arr[start] + arr[end]);
    left = arr[start];
    right = arr[end];
  }
  if (arr[start] + arr[end] === 0) {
    break;
  } else if (arr[start] + arr[end] > 0) {
    end--;
  } else {
    start++;
  }
}

console.log(left, right);
