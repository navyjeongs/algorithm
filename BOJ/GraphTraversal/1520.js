const moveX = [-1, 1, 0, 0];
const moveY = [0, 0, -1, 1];

const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);

let map = Array.from(Array(M), () => Array(N));

for (let i = 0; i < M; i++) {
  const inputs = input[i + 1].split(" ").map(Number);
  for (let j = 0; j < N; j++) {
    map[i][j] = inputs[j];
  }
}

let countMap = Array.from(Array(M), () => Array(N).fill(-1));
countMap[M - 1][N - 1] = 1;

function DFS(y, x) {
  console.log(countMap);

  if (y === M - 1 && x === N - 1) {
    return 1;
  }
  // 방문했던 곳이라면
  if (countMap[y][x] !== -1) {
    return countMap[y][x];
  }

  // 방문 안했던 곳이라면
  countMap[y][x] = 0; // 방문처리
  for (let i = 0; i < 4; i++) {
    let newY = y + moveY[i];
    let newX = x + moveX[i];
    if (newY >= 0 && newX >= 0 && newY < M && newX < N && map[y][x] > map[newY][newX]) {
      countMap[y][x] += DFS(newY, newX);
    }
  }
  return countMap[y][x];
}

DFS(0, 0);

console.log(countMap);
