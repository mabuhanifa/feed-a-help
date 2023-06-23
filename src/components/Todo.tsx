import { useState, type FormEvent } from "react";
import { BiSave } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { VscTrash } from "react-icons/vsc";
import { useDispatch } from "~/contextAPI/hooks";
import CheckBox from "./CheckBox";

export default function Todo({ todo }: { todo: Todo }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(todo.title);
  const [edit, setEdit] = useState(false);

  const updateTitle = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    if (title.trim() === "") {
      return;
    }
    if (title === todo.title) {
      return;
    }
    dispatch({
      type: "CHANGE_TITLE",
      payload: {
        id: todo.id,
        title: title,
      },
    });
    setEdit(false);
  };
  return (
    <div className="shad my-2 grid grid-cols-12 rounded  p-4">
      <div className="col-span-2 flex items-center justify-center">
        <CheckBox todo={todo} />
      </div>
      <div className="col-span-8">
        <form onSubmit={(e) => updateTitle(e)} className="flex items-center">
          <input
            type="text"
            name="title"
            value={title}
            disabled={!edit}
            className={`mr-2 rounded px-3 py-1 text-xl font-bold md:mr-10 ${
              todo.isCompleted ? "line-through" : ""
            }  ${edit ? "bg-gray-300" : ""}`}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            type="submit"
            onClick={(e) => {
              if (title.trim() !== "") {
                setEdit((m) => !m);
                updateTitle(e);
              }
            }}
            className="text-green-600"
          >
            {edit ? (
              <BiSave size={20} className="mt-1" />
            ) : (
              <FiEdit size={20} className="mt-1" />
            )}
          </button>
        </form>
      </div>
      <div className="col-span-2 flex items-center justify-center gap-x-5">
        <button
          className="flex items-center justify-center text-red-600 "
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
    </div>
  );
}
