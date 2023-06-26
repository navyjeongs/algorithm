function solution(babbling) {
  let answer = 0;

  const list = [];

  regex = /[a-z]/;

  babbling.forEach((ele) => {
    const tCase = ele.replaceAll("aya", 1).replaceAll("ye", 2).replaceAll("woo", 3).replaceAll("ma", 4);
    list.push(tCase);
  });

  function checkPossible(str) {
    regex = /[a-z]/;
    // 문자가 있다면
    if (regex.test(str)) {
      return false;
    } else {
      for (let i = 0; i < str.length - 1; i++) {
        // 앞 뒤에 같은 숫자가 있다면
        if (str[i] === str[i - 1] || str[i] === str[i + 1]) {
          return false;
        }
      }
      return true;
    }
  }

  for (let i = 0; i < list.length; i++) {
    const result = checkPossible(list[i]);
    if (result) {
      answer += 1;
    }
  }

  return answer;
}
