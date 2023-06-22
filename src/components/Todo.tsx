import { VscTrash } from "react-icons/vsc";
import { useDispatch } from "~/contextAPI/hooks";
import CheckBox from "./CheckBox";

export default function Todo({ todo }: { todo: Todo }) {
  const dispatch = useDispatch();
  return (
    <div key={todo.id} className="flex items-center p-2">
      <CheckBox key={todo.id} todo={todo} />
      <h1
        className={`text-2xl font-bold ${
          todo.isCompleted ? "line-through" : ""
        }`}
      >
        {todo.title}
      </h1>
      <button
        className="col-span-2 flex items-center justify-center text-red-600"
        onClick={() => {
          dispatch({
            type: "REMOVE_TODO",
            payload: todo.id,
          });
        }}
      >
        <VscTrash size={20} />
      </button>
    </div>
  );
}
