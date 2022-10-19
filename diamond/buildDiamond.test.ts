import buildDiamond from "./";

describe("buildDiamond() ", () => {
  it("should return an error message if the parameter is empty", () => {
    try {
      buildDiamond();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe(
        "You need to provide an alphabetical letter!"
      );
    }
  });

  it("should return an error message if the parameter is not valid", () => {
    try {
      buildDiamond("123");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe("Please provide an alphabet letter!");
    }
  });

  it("should return a single line if I pass A letter", () => {
    expect(buildDiamond("A")).toEqual(["A"]);
  });

  it("should return a diamond shape with 3 lines if I pass B letter", () => {
    expect(buildDiamond("B")).toEqual([
      " A ", //
      "B B",
      " A ",
    ]);
  });

  it("should return a diamond shape with 5 lines if I pass C letter", () => {
    expect(buildDiamond("C")).toEqual([
      "  A  ", //
      " B B ",
      "C   C",
      " B B ",
      "  A  ",
    ]);
  });

  it("should return a diamond shape with 7 lines if I pass D letter", () => {
    expect(buildDiamond("D")).toEqual([
      "   A   ",
      "  B B  ",
      " C   C ",
      "D     D",
      " C   C ",
      "  B B  ",
      "   A   ",
    ]);
  });

  it("should return a diamond shape with 19 lines if I pass J letter", () => {
    expect(buildDiamond("J")).toEqual([
      "         A         ",
      "        B B        ",
      "       C   C       ",
      "      D     D      ",
      "     E       E     ",
      "    F         F    ",
      "   G           G   ",
      "  H             H  ",
      " I               I ",
      "J                 J",
      " I               I ",
      "  H             H  ",
      "   G           G   ",
      "    F         F    ",
      "     E       E     ",
      "      D     D      ",
      "       C   C       ",
      "        B B        ",
      "         A         ",
    ]);
  });
});
