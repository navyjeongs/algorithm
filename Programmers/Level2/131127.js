function solution(want, number, discount) {
  let wantMap = new Map();

  for (let i = 0; i < want.length; i++) {
    wantMap.set(want[i], number[i]);
  }

  for (let i = 0; i < 10; i++) {
    if (wantMap.get(discount[i]) !== undefined) {
      wantMap.set(discount[i], wantMap.get(discount[i]) - 1);
    }
  }

  let answer = 0;

  let start = 0;

  while (start <= discount.length - 10) {
    if (start) {
      // 하루 전 물건을 다시 사야하는 물건에 넣기
      if (wantMap.get(discount[start - 1]) !== undefined) {
        wantMap.set(discount[start - 1], wantMap.get(discount[start - 1]) + 1);
      }
      // 내일 물건을 사야하는 물건에서 빼기
      if (wantMap.get(discount[start + 9]) !== undefined) {
        wantMap.set(discount[start + 9], wantMap.get(discount[start + 9]) - 1);
      }
    }

    let allBuy = true;
    for (const [key, values] of wantMap) {
      // 사야하는게 있다면
      if (values !== 0) {
        allBuy = false;
        break;
      }
    }

    if (allBuy) {
      answer += 1;
    }

    start++;
  }

  return answer;
}
