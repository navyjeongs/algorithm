const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);
const M = +input[2];
const search = input[3].split(" ").map(Number);

arr.sort((a, b) => a - b); // 배열 오름차순 정렬

function binarySearch(start, end, search) {
  if (start > end) {
    // 찾고자하는 값이 없다면
    return 0;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === search) {
    return 1;
  } else if (arr[mid] > search) {
    return binarySearch(start, mid - 1, search);
  } else {
    return binarySearch(mid + 1, end, search);
  }
}

const answer = [];
for (let i = 0; i < M; i++) {
  answer.push(binarySearch(0, arr.length - 1, search[i])); // 찾고자 하는 값을 탐색
}

console.log(answer.join("\n"));
