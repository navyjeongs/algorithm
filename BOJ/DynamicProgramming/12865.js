const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

// 물품의 수, 버틸 수 있는 무게
const [N, K] = input[0].split(" ").map(Number);

let thing = new Array(N + 1);

for (let i = 0; i < N; i++) {
  const [W, V] = input[i + 1].split(" ").map(Number);
  thing[i + 1] = { wei: W, val: V };
}

// dp[i][j] : 배낭 용량이 i인데 j번째 물건까지 탐색했을 때 배낭의 최대 가치
let dp = Array.from(Array(N + 1), () => new Array(K + 1).fill(0));

// i : 배낭 용량
for (let i = 1; i < N + 1; i++) {
  // j : j번째 물건
  for (let j = 1; j < N + 1; j++) {}
}

// i : 배낭 용량
for (let i = 1; i < K + 1; i++) {
  // j : j번째 물건
  for (let j = 1; j < N + 1; j++) {
    // j번째 물건의 무게가 현재 배낭의 용량보다 크다면
    if (thing[j].wei > i) {
      dp[j][i] = dp[j - 1][i];
    } else {
      dp[j][i] = Math.max(dp[j - 1][i - thing[j].wei] + thing[j].val, dp[j - 1][i]);
    }
  }
}

console.log(dp[N][K]);
