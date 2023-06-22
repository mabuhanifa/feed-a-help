import { useState, type FormEvent } from "react";
import { VscAdd } from "react-icons/vsc";
import { useDispatch, useSelector } from "~/contextAPI/hooks";

export default function CreateTodo() {
  const todos = useSelector((s) => s.todos);
  const findId = todos?.sort((a, b) => b.id - a.id)[0]?.id;
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  //create todo function
  const createTodo = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: findId ? findId + 1 : todos.length + 1,
        title,
        isCompleted: false,
      },
    });
    setTitle("");
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={(e) => createTodo(e)} className="flex items-center gap-2">
        <input
          type="text"
          name="title"
          value={title}
          className="rounded-md bg-gray-300 p-2 placeholder:text-gray-600"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a todo"
        />
        <button
          type="submit"
          onSubmit={(e) => createTodo(e)}
          className="rounded-md bg-blue-500 p-2.5 text-white"
        >
          <VscAdd size={20} />
        </button>
      </form>
    </div>
  );
}
