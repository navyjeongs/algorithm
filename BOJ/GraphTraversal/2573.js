const moveX = [-1, 1, 0, 0];
const moveY = [0, 0, -1, 1];
let isVisited;
let isVisited2;

const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let arr = Array.from(Array(N), () => Array(M).fill(0));

for (let i = 0; i < N; i++) {
  let ele = input[i + 1].split(" ").map(Number);
  for (let j = 0; j < M; j++) {
    arr[i][j] = ele[j];
  }
}

let year = 0; // 몇년이 지났는지

while (1) {
  isVisited = Array.from(Array(N), () => Array(M).fill(0)); // 매년 빙하가 2덩어리로 나눠졌는지 확인을 위한 배열
  let iceNum = 0; // 빙하 덩어리 확인
  let isExistIce = false; // 빙하 존재 여부
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 방문안했으면서 빙하가 있다면
      if (isVisited[i][j] === 0 && arr[i][j] !== 0) {
        checkIce(i, j);
        iceNum++;
        isExistIce = true;
      }
    }
  }

  // 빙하가 2덩어리 이상 쪼개졌으면 멈춤
  if (iceNum >= 2) {
    break;
  }

  // 다 녹았는데 빙하가 2덩어리로 안쪼개지면 멈춤
  if (!isExistIce) {
    year = 0;
    break;
  }

  isVisited2 = Array.from(Array(N), () => Array(M).fill(0)); // 빙하 녹이기 위한 배열

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 빙하기 있는 곳이면서 방문안한 곳이라면
      if (arr[i][j] !== 0 && isVisited2[i][j] === 0) {
        melting(i, j);
      }
    }
  }
  year++;
}

function melting(y, x) {
  isVisited2[y][x] = 1;

  for (let i = 0; i < 4; i++) {
    let newY = y + moveY[i];
    let newX = x + moveX[i];
    if (newY >= 0 && newX >= 0 && newY < N && newX < M) {
      // 녹아있던 곳이면
      if (isVisited2[newY][newX] === 0 && arr[newY][newX] === 0) {
        if (arr[y][x] >= 1) {
          arr[y][x] -= 1;
        }
      }
    }
  }
}

function checkIce(y, x) {
  isVisited[y][x] = 1; // 방문 처리

  for (let i = 0; i < 4; i++) {
    let newY = y + moveY[i];
    let newX = x + moveX[i];
    // 좌표 유효성 확인
    if (newY >= 0 && newX >= 0 && newY < N && newX < M) {
      // 빙하가 있으면서 방문안했다면
      if (arr[newY][newX] !== 0 && isVisited[newY][newX] === 0) {
        checkIce(newY, newX);
      }
    }
  }
}

console.log(year);
