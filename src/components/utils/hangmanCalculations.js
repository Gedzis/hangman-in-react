export const buildHangmanDisplayProps = (attemptsLeft) => {
  return {
    body: attemptsLeft >= 6,
    leftArm: attemptsLeft >= 5,
    rightArm: attemptsLeft >= 4,
    leftLeg: attemptsLeft >= 3,
    rightLeg: attemptsLeft >= 2,
    head: attemptsLeft >= 1,
  }
};
