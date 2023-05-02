function solution(rows, columns, queries) {
  let answer = [];

  let arr = Array.from(Array(rows), () => Array(columns).fill(0));

  let count = 1;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      arr[i][j] = count++;
    }
  }

  // 각 케이스에 대회 회전 대상 구하기
  for (let k = 0; k < queries.length; k++) {
    let min = Infinity;
    let turnArr = Array.from(Array(rows), () => Array(columns).fill(0));

    const [y1, x1, y2, x2] = queries[k];

    // x좌표가 같거나 y좌표가 같으면 회전 대상으로 선택하기
    for (let i = y1 - 1; i < y2; i++) {
      for (let j = x1 - 1; j < x2; j++) {
        if (i === y1 - 1 || i === y2 - 1) {
          turnArr[i][j] = 1;
        } else if (j === x1 - 1 || j === x2 - 1) {
          turnArr[i][j] = 1;
        }
      }
    }

    // 원본 배열 복사
    let changeArr = arr.map((v) => [...v]);

    for (let i = y1 - 1; i < y2; i++) {
      for (let j = x1 - 1; j < x2; j++) {
        if (turnArr[i][j] === 1) {
          // 가장 윗줄은 왼쪽에서 원소를 가져옴
          if (i === y1 - 1 && j > x1 - 1) {
            changeArr[i][j] = arr[i][j - 1];
          }
          // 가장 아랫줄
          else if (i === y2 - 1 && j < x2 - 1) {
            changeArr[i][j] = arr[i][j + 1];
          }
          // 왼쪽 줄
          else if (j === x1 - 1 && i < y2 - 1) {
            changeArr[i][j] = arr[i + 1][j];
          }
          // 오른쪽 줄
          else if (j === x2 - 1 && i > y1 - 1) {
            changeArr[i][j] = arr[i - 1][j];
          }
          min = Math.min(min, arr[i][j]);
        }
      }
    }

    arr = changeArr.map((v) => [...v]);

    answer.push(min);
  }

  return answer;
}
