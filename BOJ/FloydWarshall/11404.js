const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const m = +input[1];

// 그래프
const arr = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));

// 비용 그래프
const cost = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));

for (let i = 0; i < m; i++) {
  const [a, b, c] = input[i + 2].split(" ").map(Number);
  // 이미 간선이 있다면 작은 비용을 간선으로 택함
  if (arr[a][b] !== 0) {
    arr[a][b] = Math.min(arr[a][b], c);
  }
}

// 초기 비용 셋팅
for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < n + 1; j++) {
    // 자기 자신은 0으로 설정
    if (i === j) {
      cost[i][j] = 0;
    } else if (arr[i][j] !== 0) {
      cost[i][j] = arr[i][j];
    }
  }
}

// i: 거쳐가야할 정점, j: 시작 정점, k:도착 정점
for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < n + 1; j++) {
    for (let k = 1; k < n + 1; k++) {
      // 현재 정점보다 거쳐가는 정점의 비용이 더 작으면
      cost[j][k] = Math.min(cost[j][k], cost[j][i] + cost[i][k]);
    }
  }
}

let answer = "";

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < n + 1; j++) {
    if (cost[i][j] === Infinity) {
      cost[i][j] = 0;
    }

    if (j === n) {
      answer += cost[i][j];
    } else {
      answer += cost[i][j] + " ";
    }
  }
  answer += "\n";
}

console.log(answer);
