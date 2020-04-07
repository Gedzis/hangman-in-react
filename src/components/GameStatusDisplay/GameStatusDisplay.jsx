import React from 'react';
import PropTypes from "prop-types";
import './GameStatusDisplay.scss'
import GameStatus from "../../utils/gameStatus";

function GameStatusDisplay({word = '', guessedLetters = [], guesses, missed, restartGame, gameStatus}) {
  if(gameStatus === GameStatus.won){
    return (
      <div className="game-status">
        <div className="game-status__game-info">
          You win!!!! <span role="img" aria-label="You win">🤗 🏆 🤗</span>
        </div>
        <div className="game-status__game-letters">
          {word.split('').map((letter, index)=>{
            return <span className="game-status__game-letters__letter" key={`letter-${index}`}>{letter}</span>
          })}
        </div>
        <div className="game-actions">
          <button onClick={restartGame}>Restart game</button>
        </div>
      </div>
    )
  }
  if(gameStatus === GameStatus.lost){
    return (
      <div className="game-status">
        You lost! Try again <span role="img" aria-label="You lost! Try again ">😢 😭</span>
        <div className="game-status__game-letters">
          {word.split('').map((letter, index)=>{
            return <span className="game-status__game-letters__letter" key={`letter-${index}`}>{letter}</span>
          })}
        </div>
        <div className="game-actions">
          <button onClick={restartGame}>Try again</button>
        </div>
      </div>
    )
  }
  return (
    <div className="game-status">
        <div className="game-status__game-letters">
          {word.split('').map((letter, index)=>{
            const symbolToDisplay = guessedLetters.includes(letter) ? letter: '_';
            return <span className="game-status__game-letters__letter" key={`letter-${index}`}>{symbolToDisplay}</span>
          })}
        </div>
        <div className="game-status__game-info">
          <span className="game-status__game-info__result--green">Guesses: {guesses}</span>
          <span className="game-status__game-info__result--red"> Missed: {missed}</span>
        </div>
        <div className="game-actions">
          <button onClick={restartGame}>Restart game</button>
        </div>
    </div>
  )
}

GameStatusDisplay.propTypes = {
  guesses: PropTypes.number.isRequired,
  missed: PropTypes.number.isRequired,
  word: PropTypes.string.isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string),
  restartGame:  PropTypes.func.isRequired,
  gameStatus: PropTypes.string.isRequired

}

export default GameStatusDisplay;
