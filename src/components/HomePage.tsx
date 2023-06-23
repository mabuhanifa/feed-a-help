import { useSelector } from "~/contextAPI/hooks";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

export default function HomePage() {
  const todos = useSelector((s) => s.todos);

  return (
    <section className="p-2 py-10 md:p-10 ">
      <CreateTodo />

      <div className="mt-10 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-700">TODO</h1>
        <div className="mt-5 flex min-h-[200px] flex-col items-center ">
          {todos &&
            todos
              .filter((f) => f.isCompleted === false)
              .map((todo) => <Todo todo={todo} key={todo.id} />)}
        </div>
        <h1 className="mt-10 text-2xl font-bold text-gray-700">COMPLETED</h1>
        <div className="mt-5 flex flex-col items-center justify-center">
          {todos &&
            todos
              .filter((f) => f.isCompleted === true)
              .map((todo) => <Todo todo={todo} key={todo.id} />)}
        </div>
      </div>
    </section>
  );
}
