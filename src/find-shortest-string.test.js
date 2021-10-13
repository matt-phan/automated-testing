// import function from local file
const findShortestString = require("./find-shortest-string");

test("findShortestString finds the shortest string in an array", () => {
  expect(findShortestString(["1", "12", "123", "1234"])).toBe("1");
  expect(findShortestString(["hi", "there", "how are you?"])).toBe("hi");
});

test("findShortestString returns the earlier string in cases of joint shortest strings", () => {
  expect(findShortestString(["hello", "there", "how are you?"])).toBe("hello");
  expect(findShortestString(["h", "e", "l", "l", "o"])).toBe("h");
});
