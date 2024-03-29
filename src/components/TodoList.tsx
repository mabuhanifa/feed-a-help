import Link from "next/link";
import { useSelector } from "~/contextAPI/hooks";
import Todo from "./Todo";

export default function TodoList() {
  const todos = useSelector((s) => s.todos);
  return (
    <div className="mt-3 flex  flex-col items-center justify-center">
      <Link href={"/blog"} className="my-3">
        Blog
      </Link>
      <h1 className="text-2xl font-bold text-gray-700">TODO</h1>
      <div className="mt-5 flex min-h-[250px] flex-col items-center ">
        {todos &&
          todos
            .filter((f) => f.isCompleted === false)
            .map((todo) => <Todo todo={todo} key={todo.id} />)}
      </div>
      <h1 className="mt-10 text-2xl font-bold text-gray-700">COMPLETED</h1>
      <div className="mt-5 flex min-h-[250px] flex-col items-center justify-center">
        {todos &&
          todos
            .filter((f) => f.isCompleted === true)
            .map((todo) => <Todo todo={todo} key={todo.id} />)}
      </div>
    </div>
  );
}
