function solution(progresses, speeds) {
  let dateArr = [];

  for (let i = 0; i < progresses.length; i++) {
    let process = progresses[i];
    let date = 0;
    while (process < 100) {
      process += speeds[i];
      date++;
    }
    dateArr.push(date);
  }

  // 정답
  let answer = [];

  // 큐에 남아있다면
  while (dateArr.length !== 0) {
    let day = dateArr.shift(); // 하나 뽑고
    let count = 1; // 갯수 추가
    while (1) {
      if (dateArr[0] <= day) {
        // day를 기준으로 이미 완료된 작업이라면
        dateArr.shift(); // 뽑고
        count++; // 갯수추가
      } else {
        break;
      }
    }
    answer.push(count);
  }
  return answer;
}
