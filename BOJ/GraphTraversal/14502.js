const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n"); // 입력

const [N, M] = input[0].split(" ").map(Number); // N : 세로, M : 가로

let areaArr = Array.from(Array(N), () => new Array(M).fill(0));
for (let i = 0; i < N; i++) {
  let map = input[i + 1].split(" ").map(Number);
  for (let j = 0; j < M; j++) {
    areaArr[i][j] = map[j];
  }
} // 원본 연구소

let safeAreaCount = 0; // 안전 영역의 최대 갯수 저장

const moveX = [-1, 1, 0, 0]; // x축 이동방향
const moveY = [0, 0, -1, 1]; // y축 이동방향

// 3개의 벽을 세우기 위한 백트래킹
function makeWall(wallCount) {
  if (wallCount === 3) {
    // 벽을 3개 설치했다면
    let newAreaArr = areaArr.map((v) => [...v]); // 원본 연구소 복사
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (newAreaArr[i][j] === 2) {
          // 바이러스를 만나면
          DFS(newAreaArr, i, j); // DFS 진행
        }
      }
    }

    let caseSafeCount = 0; // 이번 케이스의 안전 영역의 갯수
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (newAreaArr[i][j] === 0) {
          // 안전영역 갯수 세기
          caseSafeCount += 1;
        }
      }
    }

    // 이전의 상황보다 지금 상황의 안전 영역이 더 많다면
    if (safeAreaCount < caseSafeCount) {
      safeAreaCount = caseSafeCount;
    }
    return;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (areaArr[i][j] === 0) {
        areaArr[i][j] = 1;
        makeWall(wallCount + 1);
        areaArr[i][j] = 0;
      }
    }
  }
}

// 바이러스 감염시키기
function DFS(map, y, x) {
  for (let i = 0; i < 4; i++) {
    let newY = y + moveY[i];
    let newX = x + moveX[i];
    if (newY >= 0 && newX >= 0 && newY < N && newX < M && map[newY][newX] === 0) {
      map[newY][newX] = 2;
      DFS(map, newY, newX);
    }
  }
}

makeWall(0); // 시작하기
console.log(safeAreaCount);
