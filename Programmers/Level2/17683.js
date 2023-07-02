function solution(m, musicinfos) {
  // #이 붙은 음을 하나의 문자로 줄임
  const newM = m.replaceAll("C#", "c").replaceAll("D#", "d").replaceAll("F#", "f").replaceAll("G#", "g").replaceAll("A#", "a");

  // 정답 저장
  const answer = [];

  for (let i = 0; i < musicinfos.length; i++) {
    const [start, end, title, info] = musicinfos[i].split(",");

    // #이 붙은 음을 하나의 문자로 줄임
    const infos = info.replaceAll("C#", "c").replaceAll("D#", "d").replaceAll("F#", "f").replaceAll("G#", "g").replaceAll("A#", "a");

    const [endH, endM] = end.split(":").map(Number);
    const endTime = endH * 60 + endM;

    const [startH, startM] = start.split(":").map(Number);
    const startTime = startH * 60 + startM;

    // 총 음악 플레이 시간
    const playTime = endTime - startTime;

    // 음악 플레이 시간동안 전체 연주된 음
    // 몫만큼 반복하고 infos에서 나머지 만큼을 이어 붙임
    let allInfo = infos.repeat(Math.floor(playTime / infos.length)) + infos.slice(0, playTime % infos.length);

    if (allInfo.includes(newM)) {
      answer.push({ title, playTime });
    }
  }

  if (answer.length === 0) {
    return "(None)";
  } else if (answer.length === 1) {
    return answer[0].title;
  } else {
    answer.sort((a, b) => {
      if (a.playTime === b.playTime) {
        return 0;
      }
      if (a.playTime > b.playTime) {
        return -1;
      } else {
        return 1;
      }
    });
    return answer[0].title;
  }
}
