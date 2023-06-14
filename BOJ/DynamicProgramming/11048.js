const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = Array.from(Array(N + 1), () => Array(M + 1).fill(0));
const dp = Array.from(Array(N + 1), () => Array(M + 1).fill(0));

for (let i = 1; i < N + 1; i++) {
  const ele = input[i].split(" ").map(Number);
  for (let j = 1; j < M + 1; j++) {
    arr[i][j] = ele[j - 1];
  }
}

for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < M + 1; j++) {
    // 사탕의 갯수는 0보다 크므로 dp[i-1][j-1]은 조사할 필요가 없다.
    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + arr[i][j];
  }
}

console.log(dp[N][M]);
