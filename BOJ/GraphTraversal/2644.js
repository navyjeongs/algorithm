const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0]; // 전체 인원
let arr = Array.from(Array(n + 1), () => Array());
const [from, to] = input[1].split(" ").map(Number); // 찾아야하는 사람
const m = +input[2]; // 연결 된 집합의 수

// 각 원소에 서로를 추가
for (let i = 0; i < m; i++) {
  const [first, second] = input[i + 3].split(" ").map(Number);
  arr[first].push(second);
  arr[second].push(first);
}

let isVisited = new Array(n + 1).fill(0); // 방문 여부를 확인하는 배열

let isFlag = false; // 친척 관계가 있는지 확인하는 flag;

DFS(from, 0);

function DFS(start, depth) {
  isVisited[start] = 1;

  // 만약 찾았다면
  if (start === to) {
    console.log(depth);
    isFlag = true;
    return;
  }

  // 해당 사람과 연결되어 있는 사람만큼 반복
  for (let i = 0; i < arr[start].length; i++) {
    // 방문하지 않았다면
    if (isVisited[arr[start][i]] === 0) {
      // 촌수를 +1
      DFS(arr[start][i], depth + 1);
    }
  }
}

// 만약 못찾았다면
if (!isFlag) {
  console.log(-1);
}
