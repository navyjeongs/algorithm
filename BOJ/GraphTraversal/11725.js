const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];

const tree = new Map();
for (let i = 0; i < N; i++) {
  tree.set(i + 1, []);
}

for (let i = 0; i < N - 1; i++) {
  const [start, end] = input[i + 1].split(" ").map(Number);
  tree.get(start).push(end);
  tree.get(end).push(start);
}

let isVisited = new Array(N + 1).fill(0);

function bfs(start) {
  let queue = [start];
  isVisited[start] = 1;

  while (queue.length !== 0) {
    let node = queue.shift();
    for (let value of tree.get(node)) {
      // 방문 안한 정점이라면
      if (isVisited[value] === 0) {
        // 방문 처리 후, 큐에 삽입
        isVisited[value] = node;
        queue.push(value);
      }
    }
  }
}

bfs(1);

let answer = [];

for (let i = 2; i < N + 1; i++) {
  answer.push(isVisited[i]);
}

console.log(answer.join("\n"));
