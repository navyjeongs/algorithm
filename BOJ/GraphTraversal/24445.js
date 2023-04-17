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
    this.size = 0;
  }

  queue(data) {
    let newNode = new Node(data);
    if (this.size === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  dequeue() {
    if (this.size === 0) {
      return -1;
    }
    let returnNode = this.head.data;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.size--;
    return returnNode;
  }

  length() {
    return this.size;
  }
}

const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

const [N, M, R] = input[0].split(" ").map(Number);

let graph = new Map();

for (let i = 0; i < N + 1; i++) {
  graph.set(i, []);
}

for (let i = 0; i < M; i++) {
  const [from, to] = input[i + 1].split(" ").map(Number);

  graph.get(from).push(to);
  graph.get(to).push(from);
}

for (let i = 0; i < N + 1; i++) {
  graph.get(i).sort((a, b) => b - a);
}

let answer = new Array(N + 1).fill(0);

bfs(R);

function bfs(start) {
  let idx = 1;

  const queue = new Queue();
  queue.queue(start);

  answer[start] = 1;

  while (queue.length() !== 0) {
    const ele = queue.dequeue();
    for (let i of graph.get(ele)) {
      if (answer[i] === 0) {
        idx += 1;
        answer[i] = idx;
        queue.queue(i);
      }
    }
  }
}

answer.shift();
console.log(answer.join("\n"));
