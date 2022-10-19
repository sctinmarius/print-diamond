function getLetterFromCode(code?: number) {
  if (!code) throw new Error("Please provide an alphabetical position between 1 - 26.");
  const LIMIT_CHAR_CODE = 64;
  const charCode = code + LIMIT_CHAR_CODE;
  const isAlphabet = charCode > 64 && charCode <= 90;
  if (!isAlphabet) {
    throw new Error("The code is invalid!");
  }
  return String.fromCharCode(charCode);
}

export default getLetterFromCode;
