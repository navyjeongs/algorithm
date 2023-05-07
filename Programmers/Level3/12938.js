function solution(n, s) {
  let roundNum = Math.floor(s / n); // 모든 원소를 s를 n으로 나눈 몫으로 시작
  let arr = new Array(n).fill(roundNum);
  let sum = roundNum * n; // 현재 총합 구함

  if (s < n) {
    // 구할 수 없는 상황이라면
    return [-1];
  } else if (sum === s) {
    // 모든 수가 같을 때가 정답이라면
    return arr;
  } else {
    // 모든 원소를 1씩 증가시키면서 sum이 같아지면 break;
    for (let i = arr.length - 1; i > -1; i--) {
      arr[i] += 1;
      sum += 1;
      if (sum === s) {
        break;
      }
    }
  }

  return arr;
}
