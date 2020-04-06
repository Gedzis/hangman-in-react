import React from 'react';
import PropTypes from 'prop-types';

function KeyboardButton({onClick, letter, disabled}) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {letter}
    </button>
  );
}

KeyboardButton.propTypes = {
  letter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default KeyboardButton;
