function solution(s) {
  let dp = Array.from(Array(s.length), () => Array(s.length).fill(0));

  let maxPal = 1;

  // 자기 자신은 팰린드롬
  for (let i = 0; i < dp.length; i++) {
    dp[i][i] = true;
  }

  for (let i = 0; i < dp.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      maxPal = 2;
    }
  }

  // len : 팰린드롬의 길이
  for (let len = 3; len <= dp.length; len++) {
    // start : 길이가 len인 팰린드롬 문자의 시작 index
    for (let start = 0; start <= dp.length - len + 1; start++) {
      let end = start + len - 1; // 팰린드롬의 끝 index
      // 시작과 끝이 같은 문자면서 시작 +1 부터 끝 -1까지가 팰린드롬일 때
      if (s[start] === s[end] && dp[start + 1][end - 1]) {
        dp[start][end] = true;
        maxPal = len;
      }
    }
  }

  return maxPal;
}
