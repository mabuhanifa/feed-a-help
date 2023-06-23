import { useState, type FormEvent } from "react";
import { VscAdd } from "react-icons/vsc";
import { useDispatch, useSelector } from "~/contextAPI/hooks";

export default function CreateTodo() {
  const todos = useSelector((s) => s.todos);
  const highestId = todos?.sort((a, b) => b.id - a.id)[0]?.id;
  console.log(highestId, todos);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  //create todo function
  const createTodo = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    if (title.trim() !== "") {
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: highestId ? highestId + 1 : todos.length,
          title,
          isCompleted: false,
        },
      });
      setTitle("");
    }
  };
  return (
    <div className="flex justify-center">
      <form
        onSubmit={(e) => createTodo(e)}
        className="shad flex items-center gap-2 rounded p-5"
      >
        <input
          type="text"
          name="title"
          value={title}
          className="rounded-md bg-gray-300 p-2 px-10 placeholder:text-gray-600"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="ADD ITEM"
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
