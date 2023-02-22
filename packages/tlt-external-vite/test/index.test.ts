import { describe, it } from "vitest";
import fc from "fast-check";

import { add } from "../src";

describe("Math Helpers tests", () => {
  it("Should add two numbers", () => {
    fc.assert(
      fc.property(
        fc.integer(),
        fc.integer(),
        (number1, number2) => add(number1, number2) === number1 + number2
      )
    );
  });
});
