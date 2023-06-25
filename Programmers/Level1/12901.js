function solution(a, b) {
  const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  let date = 0;

  for (let i = 1; i < a; i++) {
    date += month[i];
  }

  return day[(date + b) % 7];
}
