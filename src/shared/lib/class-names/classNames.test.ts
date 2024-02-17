import { classNames } from "shared/lib/class-names/classNames";

describe("classNames", () => {
  test("string param", () => {
    expect(classNames("class1")).toBe("class1");
  });

  test("object params", () => {
    expect(classNames({ class1: true, class2: false })).toBe("class1");
  });

  test("combined params", () => {
    expect(classNames("class1", { class2: true, class3: false })).toBe("class1 class2");
  });
});
