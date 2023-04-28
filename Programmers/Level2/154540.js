let yLen;
let xLen;
let moveX = [-1, 1, 0, 0];
let moveY = [0, 0, -1, 1];
let originMap;
let isVisited;
let max = 0;
function dfs(y, x) {
  let cost = originMap[y][x];
  for (let i = 0; i < 4; i++) {
    let newY = y + moveY[i];
    let newX = x + moveX[i];
    if (newY >= 0 && newX >= 0 && newY < yLen && newX < xLen) {
      // 방문안했으면서 섬이 있으면
      if (isVisited[newY][newX] === 0 && originMap[newY][newX] !== -1) {
        isVisited[newY][newX] = 1;
        cost += dfs(newY, newX, isVisited[newY][newX]);
      }
    }
  }
  console.log(cost);
  return cost;
}

function solution(maps) {
  let answer = [];

  yLen = maps.length; // y길이
  xLen = maps[0].length; // x길이

  originMap = Array.from(Array(yLen), () => Array(xLen).fill(0));
  isVisited = Array.from(Array(yLen), () => Array(xLen).fill(0));

  for (let i = 0; i < yLen; i++) {
    let mapPos = maps[i].split("");
    for (let j = 0; j < xLen; j++) {
      if (mapPos[j] === "X") {
        originMap[i][j] = -1;
        isVisited[i][j] = -1;
      } else {
        originMap[i][j] = +mapPos[j];
      }
    }
  }

  for (let i = 0; i < yLen; i++) {
    for (let j = 0; j < xLen; j++) {
      if (isVisited[i][j] === 0) {
        isVisited[i][j] = originMap[i][j];
        const case1 = dfs(i, j);
        answer.push(case1);
      }
    }
  }

  if (answer.length !== 0) {
    return answer.sort((a, b) => a - b);
  } else {
    return [-1];
  }
}
