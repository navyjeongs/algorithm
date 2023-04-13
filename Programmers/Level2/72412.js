let lists = {};

// info를 배열에 넣기
function infoToObject(info) {
  for (let i = 0; i < info.length; i++) {
    const arr = info[i].split(" ");
    const score = +arr.pop(); // score만 빼오기
    const key = arr.join(""); // 나머지를 하나의 문자열로 합침
    // ex : pythonfrontendseniorchicken

    // 이전에 없던 key라면
    if (!lists[key]) {
      lists[key] = [score]; // value를 배열 형태로 저장
    }
    // 이미 있던 key라면
    else {
      lists[key].push(score); // value가 배열형태로 저장되어 있으므로 push
    }
  }
}

// 객체의 배열 정렬
function sortLists() {
  for (let key in lists) {
    lists[key].sort((a, b) => a - b);
  }
}

// 쿼리문 검사/ -는 없애기
function checkQuery(data) {
  let returnQuery = data.split(/ and | |-/); // " and "와 " "와 "-" 제거
  returnQuery = returnQuery.filter((v) => v !== ""); // split를 통해 ""가 된거 없애기
  let score = +returnQuery.pop(); // 점수 빼오기

  // score를 뺀 returnQurty와 score를 return
  return { query: returnQuery, score };
}

function checkLists(querys) {
  const { query, score } = querys; // 구조분해 할당을 통해 querys의 query와 score를 가져옴

  // 쿼리에 맞는 인원 수
  let count = 0;

  // 리스트의 key를 가져옴
  for (let key in lists) {
    // key에 query가 몇 개 포함되어 있는지
    let correctQuery = 0;

    for (let i = 0; i < query.length; i++) {
      // key에 해당 query[i]의 요소가 있다면
      if (key.includes(query[i])) {
        // correctQurey + 1
        correctQuery += 1;
      } else {
        break;
      }
    }

    // key에 일치하는 쿼리의 수가 쿼리의 길이와 같다면
    if (correctQuery === query.length) {
      // lower Bound를 사용하여 어디부터 포함시킬지 결정
      const index = binarySearch(lists[key], 0, lists[key].length - 1, score);
      // index ~ 배열 끝까지의 갯수를 셈
      count = count + (lists[key].length - 1) - (index - 1);
    }
  }
  return count;
}

function binarySearch(arr, start, end, findValue) {
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] < findValue) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
}

function solution(info, query) {
  let answer = [];

  infoToObject(info); // info 배열을 객체로 만들어 원소 저장

  sortLists(); // 객체안의 배열 정렬

  // 각 쿼리를 점수로 변경
  query.map((data) => {
    let findQuery = checkQuery(data);
    let count = checkLists(findQuery);
    answer.push(count);
  });

  return answer;
}
