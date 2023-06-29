function solution(people, limit) {
  let answer = 0;

  people.sort((a, b) => b - a);

  let start = 0;
  let end = people.length - 1;

  // end가 start보다 크거나 같을때까지 반복
  while (start <= end) {
    let first = people[start];
    let second = people[end];

    // start와 end가 같다면 마지막 인원이므로 보트에 태우고 break
    if (start === end) {
      answer++;
      break;
    }

    // start + end가 limit보다 작으면 둘 다 보트에 태움
    if (first + second <= limit) {
      end--;
    }

    start++;
    answer += 1;
  }
  return answer;
}
