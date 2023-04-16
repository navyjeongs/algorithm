function solution(food) {
  let foodList = [];

  for (let i = 1; i < food.length; i++) {
    while (food[i] >= 2) {
      if (food[i] - 2 >= 0) {
        foodList.push(i);
        food[i] -= 2;
      }
    }
  }

  let answer = foodList.join("") + "0" + foodList.reverse().join("");

  return answer;
}
