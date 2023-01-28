import { TodoArrangement } from "./TodoArrangement";
import { TodoConstructor } from "./TodoConstructor";
import { TodosDatasSource } from "./TodoDatasSource";

export class TodoArrangementService implements TodoArrangement {
  private todoSource: TodosDatasSource;
  private todo: Array<TodoConstructor>;

  constructor() {
    this.todoSource = new TodosDatasSource();
    this.todo = new Array<TodoConstructor>();
    this.todoSource.getTodos().forEach((p) => this.todo.push(p));
  }

  getById(id: number): TodoConstructor {
    return this.todo.filter((p) => p.id === id)[0];
  }
  getTodos(): TodoConstructor[] {
    return this.todo;
  }
  saveTodo(todo: TodoConstructor): void {
    if (todo.id == 0 || todo.id == null) {
      todo.id = this.generateId();
      this.todo.push(todo);
    } else {
      let index;
      for (let i = 0; i < this.todo.length; i++) {
        if (this.todo[i].id === todo.id) {
          index = i;
        }
      }
      this.todo.splice(index, 1, todo);
    }
  }
  deleteTodo(todo: TodoConstructor): void {
    let index = this.todo.indexOf(todo);
    if (index > 0) {
      this.todo.splice(index, 1);
    }
  }
  private generateId(): number {
    let key = 1;
    while (this.getById(key) != null) {
      key++;
    }
    return key;
  }
}
