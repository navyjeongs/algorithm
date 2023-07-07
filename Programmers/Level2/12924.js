function solution(n) {
  let answer = 0;

  for (let i = 1; i < Math.round(n / 2) + 1; i++) {
    let sum = i;
    for (let j = i + 1; j < Math.round(n / 2) + 1; j++) {
      sum += j;
      if (sum === n) {
        answer++;
        break;
      } else if (sum > n) {
        break;
      }
    }
  }
  return answer + 1;
}
