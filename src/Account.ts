import { Message } from "./Message";
import { Amount } from "./Amount";

export class Account {
  printBalance(): Message {
    return this.amount.print();
  }

  private amount: Amount;

  constructor() {
    this.amount = new Amount(0);
  }

  public deposit(amount: Amount) {
    this.amount = amount;
  }

  public printHistory(): Message {
    return new Message("2000-01-01  : deposit ")
      .append(this.amount.print())
      .append(new Message(": "))
      .append(this.amount.print());
  }
}
