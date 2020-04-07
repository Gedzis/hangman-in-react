import React, {useEffect, useState} from 'react';
import VirtualKeyboard from '../VirtualKeyboard/VirtualKeyboard'
import GameStatusDisplay from '../GameStatusDisplay/GameStatusDisplay';
import Hangman from "../Hangman/Hangman";
import {buildHangmanDisplayProps} from "../../utils/hangmanCalculations";
import {generateNewWord} from "../../utils/words";
import {calculateGameStatus, calculateMissedGuesses} from "../../utils/gameCalculations";
import GameStatus from "../../utils/gameStatus";
import './GameBoard.scss'


function GameBoard() {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [word, setGameWord] = useState('');
  const [gameStatus, setGameStatus] = useState(GameStatus.inProgress);

  useEffect(() => {
    restartGame()
  }, []);

  useEffect(() => {
   setGameStatus(calculateGameStatus(word, guessedLetters))
  }, [guessedLetters, word]);

  const onLetterClick = (letter)=>{
    setGuessedLetters([...guessedLetters, letter]);
  }
  const restartGame = ()=>{
    setGuessedLetters([]);
    setGameWord(generateNewWord());
    setGameStatus(GameStatus.inProgress);
  }
  const guesses = guessedLetters.length;

  const missedAttempts = calculateMissedGuesses(word, guessedLetters);
  return (
    <div className="game-board">
      <Hangman {...buildHangmanDisplayProps(missedAttempts)}/>
      <GameStatusDisplay
        word={word}
        guessedLetters={guessedLetters}
        gameStatus={gameStatus}
        guesses={guesses}
        missed={missedAttempts}
        restartGame={restartGame}
      />
      {gameStatus === GameStatus.inProgress && <VirtualKeyboard onLetterClick={onLetterClick} guessedLetters={guessedLetters}/>}
    </div>
  );
}

export default GameBoard;
