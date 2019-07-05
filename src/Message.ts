export class Message {
  private content: string;
  constructor(...content: string[]) {
    this.content = content.join(" ");
  }

  public toString(): string {
    return this.content;
  }

  public append(message: Message) {
    return this;
  }
}
