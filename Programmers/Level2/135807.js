function solution(arrayA, arrayB) {
  let answer = 0;

  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);

  // arrayA의 최솟값보다 작거나 같은수로 arrayA가 전부 나눠지고 arrayB가 전부 안나눠지면
  for (let i = arrayA[0]; i > 1; i--) {
    if (arrayA.every((ele) => ele % i === 0) && arrayB.every((ele) => ele % i !== 0)) {
      answer = Math.max(answer, i);
      break;
    }
  }

  // arrayB의 최솟값보다 작거나 같은수로 arrayB가 전부 나눠지고 arrayA가 전부 안나눠지면
  for (let i = arrayB[0]; i > 1; i--) {
    if (arrayB.every((ele) => ele % i === 0) && arrayA.every((ele) => ele % i !== 0)) {
      answer = Math.max(answer, i);
      break;
    }
  }

  return answer;
}
