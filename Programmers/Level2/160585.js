function solution(board) {
  // o와 x의 갯수
  let countO = 0;
  let countX = 0;

  // o와 x 갯수 세기
  function checkCount() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "O") {
          countO += 1;
        } else if (board[i][j] === "X") {
          countX += 1;
        }
      }
    }
  }

  checkCount();

  // o가 2개 이상 많거나 x가 o보다 더 많으면 불가능한 경우
  if (countO - countX > 1 || countO - countX < 0) {
    return 0;
  }

  // 틱택토 승리 여부
  function checkLine(str) {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] === str) {
        return true;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] === str) {
        return true;
      }
    }

    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] === str) {
      return true;
    }

    if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[2][0] === str) {
      return true;
    }
    return false;
  }

  // o와 x 성공여부
  let lineO = checkLine("O");
  let lineX = checkLine("X");

  // 둘 다 이긴 경우
  if (lineX && lineO) {
    return 0;
  }
  // 선공이 이겼는데 후공이 한 번 더 둔 경우
  else if (lineO && countO === countX) {
    return 0;
  }

  // 후공이 이겼는데 선공이 더 둔 경우
  else if (lineX && countO > countX) {
    return 0;
  }

  return 1;
}
