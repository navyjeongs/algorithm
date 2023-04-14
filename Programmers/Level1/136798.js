function solution(number, limit, power) {
  let nums = new Array(number + 1).fill(1);
  nums[0] = 0;
  nums[1] = 1;
  nums[2] = 2;

  for (let i = 3; i <= number; i++) {
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        nums[i] += 1;
      }
    }
  }

  for (let i = 1; i < number + 1; i++) {
    if (nums[i] > limit) {
      nums[i] = power;
    }
  }

  let answer = 0;

  for (let i = 1; i < number + 1; i++) {
    answer += nums[i];
  }

  return answer;
}
