export class GenericError extends Error {
    constructor(msg:string) {
      super(msg);
      this.name = msg;
    }
  }
  