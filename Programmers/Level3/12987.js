// 1. 투포인터 풀이
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let answer = 0;

  let aIdx = 0;
  let bIdx = 0;

  while (aIdx < A.length && bIdx < B.length) {
    if (B[bIdx++] > A[aIdx]) {
      aIdx++;
      answer++;
    }
  }
  return answer;
}

// 2. 탐색 범위 줄이는 이중 for문
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let start = 0;
  let answer = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = start; j < B.length; j++) {
      if (B[j] > A[i]) {
        start = j + 1;
        answer += 1;
        break;
      }
    }
  }

  return answer;
}
