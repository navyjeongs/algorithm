const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  function find(x) {
    if (set[x] === x) {
      return x;
    }
    return (set[x] = find(set[x]));
  }

  function union(x, y) {
    x = find(x);
    y = find(y);

    if (x === y) {
      return;
    } else if (x < y) {
      set[y] = x;
    } else {
      set[x] = y;
    }
  }

  function isSameParent(x, y) {
    return find(x) === find(y) ? "YES" : "NO";
  }

  const [n, m] = input[0].split(" ").map(Number);

  let set = [];
  for (let i = 0; i < n + 1; i++) {
    set.push(i);
  }

  let answer = [];

  for (let i = 0; i < m; i++) {
    const [c, a, b] = input[i + 1].split(" ").map(Number);
    if (c === 0) {
      union(a, b);
    } else {
      answer.push(isSameParent(a, b));
    }
  }

  console.log(answer.join("\n"));
}
