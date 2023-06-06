class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  queue(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return -1;
    }
    let returnVal = this.head.data;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }
    this.length--;
    return returnVal;
  }
}

const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

let step = new Array(Math.max(N, K) * 2 + 1);

for (let i = 0; i < step.length; i++) {
  step[i] = { count: 0, time: 0 };
}

function bfs(start) {
  let queue = new Queue();

  queue.queue(start); // 시작 위치 넣기

  step[start].count = 1;

  while (queue.length > 0) {
    let curPos = queue.dequeue();

    for (let i = 0; i < 3; i++) {
      let newPos;
      if (i === 0) {
        newPos = curPos * 2;
      } else if (i === 1) {
        newPos = curPos + 1;
      } else {
        newPos = curPos - 1;
      }

      // 유효한 좌표라면
      if (newPos >= 0 && newPos < step.length) {
        // 처음 방문했다면
        if (step[newPos].count === 0) {
          step[newPos].count = step[curPos].count;
          step[newPos].time = step[curPos].time + 1;
          // 큐에 넣기
          queue.queue(newPos);
        }
        // 두 번 이상 방문한 좌표라면
        else {
          // 같은 시간에 도착 했을 때만
          if (step[newPos].time === step[curPos].time + 1) {
            step[newPos].count += step[curPos].count;
          }
        }
      }
    }
  }
}

bfs(N);

console.log(step[K].time);
console.log(step[K].count);
