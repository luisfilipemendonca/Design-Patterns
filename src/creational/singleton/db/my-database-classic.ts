import { User } from "../interfaces/user";

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDatabaseClassic {
    if (this._instance === null) {
      this._instance = new MyDatabaseClassic();
    }
    return this._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (let user of this.users) {
      console.log(user);
    }
  }
}
