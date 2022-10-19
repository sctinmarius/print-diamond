function getPositionLetterInAlphabet(letter?: string) {
  if (!letter) throw new Error("Please provide a letter!");
  const DIFFERENCE_CHARCODE = 64;
  const code = letter[0].toUpperCase().charCodeAt(0) - DIFFERENCE_CHARCODE;
  const isAlphabetLetter = code >= 1 && code <= 26;
  if (!isAlphabetLetter) throw new Error("Please provide an alphabet letter!");
  return code;
}

export default getPositionLetterInAlphabet;
