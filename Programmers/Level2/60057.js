function solution(s) {
  let answer = 99999999;

  for (let i = 0; i < s.length; i++) {
    let sArr = s.split("");
    let tCase = [];
    while (sArr.length > 0) {
      tCase.push(sArr.splice(0, i + 1).join(""));
    }

    let cases = [{ str: tCase[0], count: 1 }];

    for (let j = 1; j < tCase.length; j++) {
      if (cases[cases.length - 1].str === tCase[j]) {
        cases[cases.length - 1] = { str: cases[cases.length - 1].str, count: cases[cases.length - 1].count + 1 };
      } else {
        cases.push({ str: tCase[j], count: 1 });
      }
    }

    let count = 0;
    for (let k = 0; k < cases.length; k++) {
      if (cases[k].count === 1) {
        count += cases[k].str.length;
      } else {
        count += cases[k].str.length + cases[k].count.toString().length;
      }
    }

    answer = Math.min(answer, count);
  }

  return answer;
}
