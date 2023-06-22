import { useSelector } from "~/contextAPI/hooks";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

export default function Todos() {
  const todos = useSelector((s) => s.todos);

  return (
    <section className="p-2 py-10 md:p-10 ">
      <CreateTodo />
      <div className="mt-10 flex flex-col items-center justify-center">
        {todos && todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
      </div>
    </section>
  );
}
