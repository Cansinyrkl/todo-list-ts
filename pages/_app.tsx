import "@/styles/globals.css";
import { TodoConstructor } from "@/storage/context/TodoConstructor";
import { TodoArrangementService } from "@/storage/context/TodoArrangementService";

let _todoService = new TodoArrangementService();

let result;

result = _todoService.getById(3);

let p = new TodoConstructor();

p.name = "gel bunu yap";
p.userAdmin = true;

_todoService.saveTodo(p);
_todoService.deleteTodo(result);

console.log(_todoService);

export default function App() {
  return <>{_todoService.getTodos}</>;
}
