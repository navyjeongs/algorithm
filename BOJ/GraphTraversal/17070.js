const moveX = [0, 1, 1];
const moveY = [1, 1, 0];

const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

const n = +input[0];

// 0 : 아무것도 없음, 1 : 벽, -1 : 가로, -2 : 세로, -3 : 대각선
const house = Array.from(Array(n), () => Array(n));

for (let i = 0; i < n; i++) {
  const tCase = input[i + 1].split(" ").map(Number);
  for (let j = 0; j < n; j++) {
    house[i][j] = tCase[j];
  }
}

let count = 0;

function dfs(y, x, status) {
  if (y === n - 1 && x === n - 1) {
    count += 1;
    return;
  }

  for (let i = 0; i < 3; i++) {
    if (status === -1 && i === 0) {
      continue;
    } else if (status === -2 && i === 2) {
      continue;
    } else {
      const newY = y + moveY[i];
      const newX = x + moveX[i];
      // 유효한 좌표라면
      if (newX >= 0 && newY >= 0 && newX < n && newY < n) {
        // 대각선이면
        if (i === 1) {
          if (!house[y + 1][x] && !house[y][x + 1] && !house[y + 1][x + 1]) {
            dfs(newY, newX, -3);
          }
        }
        // 가로면
        else if (i === 2) {
          if (!house[newY][newX]) {
            dfs(newY, newX, -1);
          }
        }
        // 세로면
        else {
          if (!house[newY][newX]) {
            dfs(newY, newX, -2);
          }
        }
      }
    }
  }
}

dfs(0, 1, -1);

console.log(count);
