import { Message } from "../src/Message";

import { expect } from "chai";
import "mocha";

describe("New message", () => {
  it("should print message", () => {
    const message = new Message("10", "EUR");
    expect(message.toString()).to.equal("10 EUR");
  });
  it("should append message", () => {
    const message = new Message("10", "EUR");
    expect(message.append("OS").toString()).to.equal("10 EUROS");
  });
});
