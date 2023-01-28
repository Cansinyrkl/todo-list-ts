import { TodoConstructor } from "./TodoConstructor";

export class TodosDatasSource {
  private todos: Array<TodoConstructor>;
  constructor() {
    this.todos = new Array<TodoConstructor>(
      new TodoConstructor(1, "yapılıcaklar", true),
      new TodoConstructor(2, "yapılıcaklar", true),
      new TodoConstructor(3, "yapılıcaklar", false),
      new TodoConstructor(4, "yapılıcaklar", false)
    );
  }
  getTodos(): TodoConstructor[] {
    return this.todos;
  }
}
