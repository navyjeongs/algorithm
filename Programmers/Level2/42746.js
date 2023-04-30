function solution(numbers) {
  let answer = numbers
    .map((val) => String(val))
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}
