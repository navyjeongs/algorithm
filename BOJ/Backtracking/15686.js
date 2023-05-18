const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

// N: 도시 크기, M: 폐업 시킬 치킨집
const [N, M] = input[0].split(" ").map(Number);

let city = Array.from(Array(N), () => Array(N).fill(0));

let chickenPos = [];

let minCost = Infinity;

// 도시의 기본 상태 입력받기
for (let i = 0; i < N; i++) {
  const pos = input[i + 1].split(" ").map(Number);
  for (let j = 0; j < N; j++) {
    city[i][j] = pos[j];
    // 치킨 집이라면
    if (pos[j] === 2) {
      chickenPos.push({ x: j, y: i, isUsed: false });
    }
  }
}

// 백트래킹을 사용하여 폐업시키지 않을 치킨집 선택
function backtracking(depth, current) {
  // 폐업시키지 않을 치킨집을 다 선택했다면 도시의 치킨 거리 구하기
  if (depth === M) {
    calDistance();
    return;
  }

  for (let i = current; i < chickenPos.length; i++) {
    if (!chickenPos[i].isUsed) {
      chickenPos[i].isUsed = true;
      backtracking(depth + 1, i + 1);
      chickenPos[i].isUsed = false;
    }
  }
}

// 도시의 치킨거리 구하기
function calDistance() {
  // 폐업시키고 남은 치킨집들과 거리를 계산하여 나오는 도시의 치킨 거리
  let cost = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (city[i][j] === 1) {
        let houseCost = Infinity; // 특정 집의 치킨 거리
        for (let k = 0; k < chickenPos.length; k++) {
          // 폐업하지 않은 치킨집이라면
          if (chickenPos[k].isUsed) {
            // 현재까지 구한 특정 집의 치킨거리보다 새로 구한 특정 집의 치킨 거리가 더 짧으면 업데이트
            houseCost = Math.min(houseCost, Math.abs(i - chickenPos[k].y) + Math.abs(j - chickenPos[k].x));
          }
        }
        cost += houseCost;
      }
    }
  }

  // 전체 케이스중에 가장 작은 도시 치킨 거리 구하기
  minCost = Math.min(minCost, cost);
}

backtracking(0, 0);
console.log(minCost);
