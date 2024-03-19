import { expect, test, describe } from "vitest";
import { sum } from "../index";

describe("Tests for sum function", () => {
  test.each([
    [0, 0, 0],
    [0, 2, 2],
    [2, 0, 2],
    [1, 2, 3],
    [6, -2, 4],
    [1.2, 0.4, 1.6],
    [1, 1.2, 2.2],
    [0, -0.1, -0.1],
  ])("%d + %d = %d", (a, b, result) => {
    expect(sum(a, b)).toBe(result);
  });

  test.each([
    [0, 0, 0, 0],
    [0, 2, 0, 2],
    [2, 0, 0, 2],
    [0, 0, 2, 2],
    [1, 2, 3, 6],
    [6, -2, 2, 6],
  ])("%d + %d + %d = %d", (a, b, c, result) => {
    expect(sum(a, b, c)).toBe(result);
  });
});
