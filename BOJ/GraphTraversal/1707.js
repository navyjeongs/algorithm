const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");
let answer = []; // 정답 저장 배열
let graph, team, isVisited; // 그래프, 집합, 방문 여부 저장 배열

const K = +input[0]; // 테스트 케이스의 갯수

let idx = 1; // shift()하지 않고 순차적으로 다음 입력을 받기위해
while (1) {
  // 테스트 케이스 끝나면 종료
  if (input[idx] === undefined) {
    break;
  }

  const [V, E] = input[idx++].split(" ").map(Number); // V : 정점의 개수, E : 간선의 개수

  graph = Array.from(Array(V + 1), () => []); // 1-index 사용해 그래프 상태 확인, 즉 시작 정점이 0이 아닌 1

  isVisited = new Array(V + 1).fill(0); // 1-index를 사용하여 정점 방문 여부 저장, 0: 방문x, 1: 1번팀, 2: 2번팀

  for (let i = 0; i < E; i++) {
    const [u, v] = input[idx++].split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
  }

  for (let i = 1; i < isVisited.length; i++) {
    if (isVisited[i] === 0) {
      dfs(i, 1);
    }
  }

  checkTeam();
}

console.log(answer.join("\n"));

// 팀을 확인하는 함수
function checkTeam() {
  for (let i = 1; i < isVisited.length; i++) {
    let team = isVisited[i]; // i 정점의 팀 번호
    for (let j = 0; j < graph[i].length; j++) {
      // 연결되어있는 정점중에 같은 팀이 있다면
      if (isVisited[graph[i][j]] === team) {
        answer.push("NO");
        return;
      }
    }
  }

  answer.push("YES");
  return;
}

// dfs
function dfs(position, group) {
  isVisited[position] = group; // 방문 처리

  let newGroup = group === 1 ? 2 : 1; // 연결되어 있는 요소는 현재 팀과 반대 팀으로 설정

  for (let i = 0; i < graph[position].length; i++) {
    if (isVisited[graph[position][i]] === 0) {
      dfs(graph[position][i], newGroup);
    }
  }
}
