import formatDate from "./formatDate";

describe("formatDate", () => {
  it("should formatDate", () => {
    const dateString = "2019-10-30T14:30Z";
    expect(formatDate(dateString)).toEqual("october 30, 2:30pm");
  });

  it("should format morning time as am", () => {
    const dateString = "2019-10-30T11:30Z";
    const expectedResult = "october 30, 11:30am";
    expect(formatDate(dateString)).toEqual(expectedResult);
  });
});
