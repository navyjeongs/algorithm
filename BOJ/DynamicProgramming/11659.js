const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

let arr = input[1].split(" ").map(Number);
let dp = new Array(N + 1).fill(0);

for (let i = 0; i < N; i++) {
  dp[i + 1] = dp[i] + arr[i];
}

let answer = [];

for (let i = 0; i < M; i++) {
  const [from, to] = input[i + 2].split(" ").map(Number);
  answer.push(dp[to] - dp[from - 1]);
}

console.log(answer.join("\n"));
