import getLetterFromCode from "./helpers/getLetterFromCode";
import getPositionLetterInAlphabet from "./helpers/getPositionLetterInAlphabet";

const buildDiamond = (letter?: string) => {
  if (!letter) throw new Error("You need to provide an alphabetical letter!");
  const positionLetter = getPositionLetterInAlphabet(letter);
  const maxLength = Array(positionLetter).fill(" ");
  const arrDiamond: any[] = [];

  maxLength.forEach((_val, index: number) => {
    const middleLine = [...maxLength];
    middleLine[index] = getLetterFromCode(positionLetter - index);

    const leftValues = middleLine.slice(0, positionLetter - 1);
    const rightValues = middleLine.reverse();
    const line = [...leftValues, ...rightValues].join("");

    arrDiamond[positionLetter - index - 1] = line;
    arrDiamond[positionLetter + index - 1] = line;
  });

  return arrDiamond;
};

export default buildDiamond;
