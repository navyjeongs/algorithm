const N = +require("fs").readFileSync("input.txt").toString().trim();

// dp[i][j] : 마지막 수가 i면서 길이가 j인 수
const dp = Array.from(Array(10), () => Array(N + 1).fill(0));

for (let i = 1; i < N + 1; i++) {
  dp[0][i] = 1;
}

for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < 10; j++) {
    dp[j][i] = (dp[j][i - 1] + dp[j - 1][i]) % 10007;
  }
}

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += dp[i][N];
}

console.log(sum % 10007);
