import { Account } from "../src/Account";
import { Amount, Currency } from "../src/Amount";
import { Message } from "../src/Message";

import { expect } from "chai";
import "mocha";

describe("New Account", () => {
  it("should return default balance", () => {
    const account: Account = new Account();
    const message: Message = account.printBalance();
    expect(message.toString()).to.equal("0 EUR");
  });
});

describe("Deposits balance", () => {
  it("should return the balance after 10 EUROS deposit", () => {
    const account: Account = new Account();
    account.deposit(new Amount(10));
    const message: Message = account.printBalance();
    expect(message.toString()).to.equal("10 EUR");
  });
  it("should return the balance after 10 DOLLARS deposit", () => {
    const account: Account = new Account();
    account.deposit(new Amount(10, Currency.USD));
    const message: Message = account.printBalance();
    expect(message.toString()).to.equal("10 USD");
  });
});

describe("Deposits history", () => {
  it("should return a single line after 100 EUROS deposit", () => {
    const account: Account = new Account();
    account.deposit(new Amount(100));
    const message: Message = account.printHistory();
    expect(message.toString()).to.equal(
      "2000-01-01  : deposit 100 EUR : 100 EUR"
    );
  });
  it("should return a single line after 200 EUROS deposit", () => {
    const account: Account = new Account();
    account.deposit(new Amount(200));
    const message: Message = account.printHistory();
    expect(message.toString()).to.equal(
      "2000-01-01  : deposit 200 EUR : 200 EUR"
    );
  });
});
