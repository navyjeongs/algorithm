const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

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

    if (this.length === 0) {
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

    let data = this.head.data;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }
    this.length--;
    return data;
  }
}

let mapSize = {};

function solution(maps) {
  mapSize = { y: maps.length, x: maps[0].length };

  bfs(maps, 0, 0);

  if (maps[mapSize.y - 1][mapSize.x - 1] === 1) {
    return -1;
  } else {
    return maps[mapSize.y - 1][mapSize.x - 1];
  }
}

function bfs(maps, y, x) {
  const queue = new Queue();
  queue.queue({ y, x });

  while (queue.length !== 0) {
    const current = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      const newY = current.y + dy[i];
      const newX = current.x + dx[i];
      if (newY >= 0 && newX >= 0 && newY < mapSize.y && newX < mapSize.x && maps[newY][newX] === 1) {
        maps[newY][newX] = maps[current.y][current.x] + 1;
        queue.queue({ y: newY, x: newX });
      }
    }
  }
}
