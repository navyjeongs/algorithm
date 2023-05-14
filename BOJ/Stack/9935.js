const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let str = input[0].split(""); // 원본 문자열

let boomStr = input[1]; // 폭발 문자열

let stack = [];

for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);

  // 가장 최근에 추가한 문자열이 폭발 문자열의 끝과 같으면
  if (stack[stack.length - 1] === boomStr[boomStr.length - 1]) {
    let tCase = [];
    for (let i = 0; i < boomStr.length; i++) {
      tCase.push(stack.pop());
    }

    if (tCase.reverse().join("") !== boomStr) {
      stack.push(...tCase);
    }
  }
}

console.log(stack.length ? stack.join("") : "FRULA");
