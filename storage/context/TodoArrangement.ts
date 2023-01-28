import { TodoConstructor } from "./TodoConstructor";

export interface TodoArrangement {
  getById(id: number): TodoConstructor;
  getTodos(): Array<TodoConstructor>;
  saveTodo(todo: TodoConstructor): void;
  deleteTodo(todo: TodoConstructor): void;
}
