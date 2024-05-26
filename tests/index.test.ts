import { cn } from "../src";

describe("cn", () => {
  test("combines multiple classes", () => {
    expect(cn("class1", "class2")).toBe("class1 class2");
  });

  test("conditionally includes classes", () => {
    expect(cn("class1", false && "class2", "class3")).toBe("class1 class3");
    expect(cn("class1", true && "class2", "class3")).toBe("class1 class2 class3");
  });

  test("merges tailwind classes correctly", () => {
    expect(cn("text-center", "text-left")).toBe("text-left");
    expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500");
  });

  test("handles empty inputs", () => {
    expect(cn()).toBe("");
    expect(cn("", null, undefined)).toBe("");
  });

  test("handles complex class merging", () => {
    expect(cn("p-4", "m-2", "p-2", "m-4")).toBe("p-2 m-4");
    expect(cn("hover:bg-red-500", "hover:bg-blue-500")).toBe("hover:bg-blue-500");
  });

  test("handles arrays of classes", () => {
    expect(cn(["class1", "class2"])).toBe("class1 class2");
    expect(cn(["class1", false && "class2", "class3"])).toBe("class1 class3");
    expect(cn(["text-center", "text-left"])).toBe("text-left");
  });

  test("handles objects with conditional classes", () => {
    expect(cn({ class1: true, class2: false, class3: true })).toBe("class1 class3");
    expect(cn({ "text-center": true, "text-left": false })).toBe("text-center");
    expect(cn({ "bg-red-500": true, "bg-blue-500": true })).toBe("bg-blue-500");
  });

  test("handles mixed arrays and objects", () => {
    expect(cn(["class1", { class2: true, class3: false }])).toBe("class1 class2");
    expect(cn([{ class1: true, class2: false }, "class3"])).toBe("class1 class3");
    expect(cn(["text-center", { "text-left": true }])).toBe("text-left");
  });
});
