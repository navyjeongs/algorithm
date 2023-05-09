function solution(topping) {
  let answer = 0;

  let mapA = new Map();
  let mapB = new Map();

  for (let i = 0; i < topping.length; i++) {
    mapA.set(topping[i], (mapA.get(topping[i]) || 0) + 1);
  }

  for (let i = 0; i < topping.length; i++) {
    mapB.set(topping[i], (mapB.get(topping[i]) || 0) + 1);

    mapA.set(topping[i], mapA.get(topping[i]) - 1);

    if (mapA.get(topping[i]) === 0) {
      mapA.delete(topping[i]);
    }

    if (mapA.size === mapB.size) {
      answer += 1;
    }
  }

  return answer;
}
