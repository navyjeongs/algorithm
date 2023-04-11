function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    // 해당 key가 이미 있다면 value를 +1
    if (map.has(participant[i])) {
      map.set(participant[i], map.get(participant[i]) + 1); // +1
    }
    // 해당 key가 없다면 value를 +1로 설정하여 (key, value) 저장
    else {
      map.set(participant[i], 1);
    }
  }

  for (let i = 0; i < completion.length; i++) {
    // value가 1이라면(즉, 동명이인이 없다면 key-value 쌍 제거)
    if (map.get(completion[i]) === 1) {
      map.delete(completion[i]);
    }
    // 동명이인이 있다면 value를 -1
    else {
      map.set(completion[i], map.get(completion[i]) - 1);
    }
  }

  // 남은 요소의 key를 반환
  for (let i of map.keys()) {
    return i;
  }
}
