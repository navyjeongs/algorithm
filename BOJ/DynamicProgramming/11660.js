const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const [N, M] = input[idx++].split(" ").map(Number);

let arr = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

for (let i = 1; i < N + 1; i++) {
  let tCase = input[idx++].split(" ").map(Number);
  for (let j = 0; j < N; j++) {
    arr[i][j + 1] = tCase[j];
  }
}

let dp = Array.from(Array(N + 1), () => Array(N + 1).fill(0)); // dp[i][j] : 00부터 ij까지의 합

for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < N + 1; j++) {
    dp[i][j] = dp[i - 1][j] + dp[i][j - 1] + arr[i][j] - dp[i - 1][j - 1];
  }
}

let answer = [];

for (let i = idx; i < input.length; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ");
  answer.push(dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1]);
}

console.log(answer.join("\n"));
