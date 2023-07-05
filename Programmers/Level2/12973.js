function solution(s) {
  let stack = [];

  stack.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    stack.push(s[i]);
    if (stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length ? 0 : 1;
}
