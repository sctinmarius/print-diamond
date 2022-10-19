import getPositionLetterInAlphabet from "./getPositionLetterInAlphabet";

describe("getPositionLetterInAlphabet()", () => {
  it("should return an error if I do not provide a letter", () => {
    try {
      getPositionLetterInAlphabet();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe("Please provide a letter!");
    }
  });

  it("should return an error if I do not provide an alphabet letter", () => {
    try {
      getPositionLetterInAlphabet("@");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe("Please provide an alphabet letter!");
    }
  });

  it("should return an error if I provide a digit number", () => {
    try {
      getPositionLetterInAlphabet("123");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe("Please provide an alphabet letter!");
    }
  });

  it("should return the first position from alphabet if I pass A letter", () => {
    const positionLetter = getPositionLetterInAlphabet("A");
    expect(positionLetter).toBe(1);
  });

  it("should return 10 position from alphabet if I pass J", () => {
    const positionLetter = getPositionLetterInAlphabet("J");
    expect(positionLetter).toBe(10);
  });

  it("should take only the first index from the parameter if I pass multiple letters", () => {
    const positionLetter = getPositionLetterInAlphabet("DFA");
    expect(positionLetter).toBe(4);
  });

  it("should transform to upperCase if I pass lowercase letter", () => {
    const positionLetter = getPositionLetterInAlphabet("m");
    expect(positionLetter).toBe(13);
  });
});
