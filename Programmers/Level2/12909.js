function solution(s) {
  let cnt = 0;
  let answer = true;

  if (s.length % 2 === 1) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      cnt += 1;
    } else {
      cnt -= 1;
      if (cnt < 0) {
        answer = false;
      }
    }
  }

  return cnt === 0 ? answer : false;
}
