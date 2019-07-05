export class Message {
  private content: string;
  constructor(...content: string[]) {
    this.content = content.join(" ");
  }

  toString(): string {
    return this.content;
  }
}
