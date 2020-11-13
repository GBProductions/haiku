import Haiku from "./../src/js/haiku.js"

describe("Haiku", () => {
  let reusableHaiku;

  beforeEach(() => {
    reusableHaiku = new Haiku("line 1", "line 2", "line 3");
  });

  test("Should correctly instantiate a haiku", () => {
    expect(reusableHaiku.line1).toEqual("line 1");
    expect(reusableHaiku.line2).toEqual("line 2");
    expect(reusableHaiku.line3).toEqual("line 3");
  });
});