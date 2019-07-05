import { Message } from "./Message";

export enum Currency {
  EUR,
  USD
}

export class Amount {
  constructor(
    private amount: number,
    private currency: Currency = Currency.EUR
  ) {}

  print(): Message {
    if (this.currency === Currency.USD) {
      return new Message(String(this.amount), "USD");
    }
    return new Message(String(this.amount), "EUR");
  }
}
