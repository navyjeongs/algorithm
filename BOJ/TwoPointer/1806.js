const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let startIdx = 0; // 시작 포인터
let endIdx = 0; // 끝 포인터
let curSum = arr[0]; // 현재 총합
let minCount = Infinity; // 최소 횟수

while (endIdx <= N && startIdx <= endIdx) {
  // 총합이 S보다 크면
  if (curSum >= S) {
    // 지금까지 저장된 최소 길이와 현재 최소 길이를 비교
    minCount = Math.min(minCount, endIdx - (startIdx - 1));
  }
  // 총합이 S보다 작으면
  if (curSum < S) {
    // 끝 포인터를 1 증가시키고 curSum을 증가
    endIdx++;
    curSum += arr[endIdx];
  }
  // 총합이 S보다 크면
  else {
    // 시작 포인터 1 증가시키고 curSum을 감소
    curSum -= arr[startIdx];
    startIdx++;
  }
}

console.log(minCount == Infinity ? 0 : minCount);
