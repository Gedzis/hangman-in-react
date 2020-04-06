const availableWords = [
  'obuolys',
  'programavimas',
  'karantinas',
  'mokykla',
  'kiemas',
  'darbas',
  'antradienis',
  'policija'
];


export const generateNewWord = () => {
  const wordIndex = Math.floor(Math.random() * availableWords.length);
  return availableWords[wordIndex];
}
