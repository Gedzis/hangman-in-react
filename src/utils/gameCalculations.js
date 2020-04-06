import GameStatus from "./gameStatus";
import {maxMisses} from "./constants";

export const calculateMissedGuesses = (word, guessedLetters)=>{
  let missed = 0;
  guessedLetters.forEach((letter)=>{
      if(!word.includes(letter)){
        missed = missed + 1;
      }
  });
  return missed;
}
export const isWordGuessed = (word, guessedLetters)=>{
  let isGuessed = true;
  word.split('').forEach((wordLetter)=>{
    if(!guessedLetters.includes(wordLetter)){
      isGuessed = false;
    }
  })
  return isGuessed;
}
export const calculateGameStatus = (word = '', guessedLetters)=>{
  const missedAttempts = calculateMissedGuesses(word, guessedLetters);
  if(maxMisses > missedAttempts){
    return isWordGuessed(word, guessedLetters) ? GameStatus.won : GameStatus.inProgress;
  }
  return GameStatus.lost
}
