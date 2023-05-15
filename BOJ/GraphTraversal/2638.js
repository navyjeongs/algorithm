const moveX = [-1, 1, 0, 0];
const moveY = [0, 0, -1, 1];

const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

// 음수: 내부 공기, 0: 치즈 없는 곳, 1: 치즈 있는 곳, 2: 한 시간 후에 치즈가 사라 질 곳
const cArr = Array.from(Array(N), () => Array(M).fill(0));

// 0: 방문 안한 곳, 1: 방문 한 곳
let isVisited;
for (let i = 0; i < N; i++) {
  let cheese = input[i + 1].split(" ").map(Number);
  for (let j = 0; j < M; j++) {
    cArr[i][j] = cheese[j];
  }
}

let day = 0;

while (1) {
  let isMelt = false;

  // 1시간 마다 방문 여부 초기화
  isVisited = Array.from(Array(N), () => Array(M).fill(0));

  // 공기 0으로 초기화
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 음수 공기도 0으로 초기화
      if (cArr[i][j] < 0) {
        cArr[i][j] = 0;
      }
    }
  }
  checkInner(0, 0); // 내부 공기 확인하기

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 치즈가 있으면서 방문안 한 곳이라면
      if (cArr[i][j] === 1 && isVisited[i][j] === 0) {
        meltCheese(i, j);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 치즈를 녹이면서 외부 공기로 처리
      if (cArr[i][j] === 2) {
        cArr[i][j] = -1;
        isMelt = true;
      }
    }
  }

  // 녹인 치즈가 있다면
  if (isMelt) {
    day++;
  } else {
    break;
  }
}

// 치즈 내부 확인하기
function checkInner(y, x) {
  isVisited[y][x] = 1;
  cArr[y][x] = -1;
  for (let i = 0; i < 4; i++) {
    const newY = y + moveY[i];
    const newX = x + moveX[i];
    if (newY >= 0 && newX >= 0 && newY < N && newX < M && cArr[newY][newX] === 0 && isVisited[newY][newX] === 0) {
      checkInner(newY, newX);
    }
  }
}

// 치즈 녹이기
function meltCheese(y, x) {
  isVisited[y][x] = 1; // 방문 처리

  let count = 0;
  for (let i = 0; i < 4; i++) {
    const newY = y + moveY[i];
    const newX = x + moveX[i];

    // 만약에 옳은 좌표이면서 외부 공기인 좌표라면
    if (newY >= 0 && newX >= 0 && newY < N && newX < M && cArr[newY][newX] === -1) {
      count++;
    }
  }

  if (count >= 2) {
    cArr[y][x] = 2;
  }
}

console.log(day);
