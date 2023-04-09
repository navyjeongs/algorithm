const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const T = +input[0];
let answer = []; // 정답 저장을 위한 배열

let dp = new Array(12).fill(0); // dp[i] : i를 만들 수 있는 경우의 수
dp[1] = 1; // 초기값
dp[2] = 2; // 초기값
dp[3] = 4; // 초기값

for (let i = 0; i < T; i++) {
  let n = +input[i + 1];

  if (dp[n] === 0) {
    find(n);
  }
  answer.push(dp[n]);
}

function find(N) {
  for (let i = 4; i < N + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
}

console.log(answer.join("\n"));
