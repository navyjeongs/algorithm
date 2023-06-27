function solution(s, skip, index) {
  let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  arr = arr.filter((ele) => (skip.includes(ele) ? false : true));

  let answer = [];

  for (let i = 0; i < s.length; i++) {
    const idx = (arr.findIndex((ele) => ele === s[i]) + index) % arr.length;
    answer.push(arr[idx]);
  }

  return answer.join("");
}
