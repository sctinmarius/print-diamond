import getLetterFromCode from "./getLetterFromCode";

describe("getLetterFromCode()", () => {
  it("should return an error if I do not provide code", () => {
    try {
      getLetterFromCode();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe(
        "Please provide an alphabetical position between 1 - 26."
      );
    }
  });

  it("should return an error if the code is not related to alphabetical between (1 - 26)", () => {
    try {
      getLetterFromCode(100);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe("The code is invalid!");
    }
  });

  it("should return A letter if the code is 1", () => {
    const letter = getLetterFromCode(1);
    expect(letter).toBe("A");
  });

  it("should return J if the code is 10", () => {
    const letter = getLetterFromCode(10);
    expect(letter).toBe("J");
  });
});
