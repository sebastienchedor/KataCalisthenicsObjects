import { Amount } from "../src/Amount";

import { expect } from "chai";
import "mocha";

describe("New Amount", () => {
  it("should contains initial amount", () => {
    const amount = new Amount(10);
    const message = amount.print();
    expect(message.toString()).to.equal("10 EUR");
  });
});
