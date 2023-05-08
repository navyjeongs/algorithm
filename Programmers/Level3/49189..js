function solution(n, edge) {
  let isVisited = new Array(n + 1).fill(0); // 방문 표시
  let map = new Map();

  for (let i = 0; i < n; i++) {
    map.set(i + 1, []);
  }

  for (let i = 0; i < edge.length; i++) {
    map.get(edge[i][0]).push(edge[i][1]);
    map.get(edge[i][1]).push(edge[i][0]);
  }

  // bfs
  function bfs(pos, depth) {
    let queue = [];
    queue.push(pos);
    isVisited[pos] = 1;

    while (queue.length !== 0) {
      let v = queue.shift();
      for (let value of map.get(v)) {
        // 방문 안했다면
        if (isVisited[value] === 0) {
          queue.push(value);
          // 다음 요소의 depth는 현재 요소의 depth + 1
          isVisited[value] = isVisited[v] + 1;
        }
      }
    }
  }

  bfs(1, 1);

  isVisited.sort((a, b) => b - a); // 정렬을 해서 가장 큰 원소를 index가 0에 위치 시킴
  let answer = isVisited.filter((ele) => ele === isVisited[0]).length; // 최댓값과 같은 원소의 갯수를 count

  return answer;
}
