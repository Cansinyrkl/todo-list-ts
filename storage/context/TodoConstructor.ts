export class TodoConstructor {
  constructor(
    public id?: number,
    public name?: string,
    public userAdmin?: boolean
  ) {}
}

let p = new TodoConstructor();
