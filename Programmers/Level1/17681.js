function solution(n, arr1, arr2) {
  let map = Array.from(Array(n), () => Array(n));
  let map1 = Array.from(Array(n), () => Array(n).fill(0));
  let map2 = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    // 2진수 변환
    map1[i] = arr1[i].toString(2).padStart(n, 0).split("").map(Number);
    map2[i] = arr2[i].toString(2).padStart(n, 0).split("").map(Number);

    for (let j = 0; j < n; j++) {
      if (map1[i][j] || map2[i][j]) {
        map[i][j] = "#";
      } else {
        map[i][j] = " ";
      }
    }
  }

  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(map[i].join(""));
  }

  return answer;
}
