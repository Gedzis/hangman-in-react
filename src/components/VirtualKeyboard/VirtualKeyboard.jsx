import React from 'react';
import KeyboardButton from "./KeyboardButton";
import './VirtualKeyboard.scss';
import PropTypes from "prop-types";

const letters = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

function VirtualKeyboard({onLetterClick, guessedLetters}) {
  const clickLetter = (letter) => {
    return () => {
      onLetterClick(letter);
    }
  };
  return (
    <div className="virtual-keyboard">
      {letters.map((lettersRow, index) => {
        return (
          <div className="virtual-keyboard__letter-row" key={`${index}-letter-row`}>
            {lettersRow.map(letter => {
              return (
                <KeyboardButton
                  key={letter}
                  letter={letter}
                  onClick={clickLetter(letter)}
                  disabled={guessedLetters.includes(letter)}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  );
}


VirtualKeyboard.propTypes = {
  onLetterClick: PropTypes.func.isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string)

};

export default VirtualKeyboard;
