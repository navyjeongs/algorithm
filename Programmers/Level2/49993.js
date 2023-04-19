function solution(skill, skill_trees) {
  let answer = 0;

  skill_trees.forEach((data) => {
    let isInValid = false;
    let preSkill = skill.split("");
    for (let i = 0; i < data.length; i++) {
      // 선행 스킬이 존재하는거라면
      if (preSkill.includes(data[i])) {
        if (preSkill[0] === data[i]) {
          preSkill.splice(0, 1);
        } else {
          isInValid = true;
          break;
        }
      }
    }
    if (!isInValid) {
      answer += 1;
    }
  });
  return answer;
}
