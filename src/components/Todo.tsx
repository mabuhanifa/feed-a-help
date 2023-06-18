import { VscTrash } from "react-icons/vsc";
import { useDispatch } from "~/contextAPI/hooks";
import CheckBox from "./CheckBox";

export default function Todo({ todo }: { todo: Todo }) {
    const dispatch = useDispatch();
    return (
        <div key={todo.id} className="flex items-center p-2">
            <CheckBox key={todo.id} todo={todo} />
            <h1 className={`text-2xl font-bold ${todo.isCompleted ? "line-through" : ""}`}>
                {todo.title}
            </h1>
            <button
                className="flex justify-center items-center text-red-600 col-span-2"
                onClick={() => {
                    dispatch({
                        type: "DELETE_TODO",
                        payload: todo.id
                    })
                }}
            >
                <VscTrash size={20} />
            </button>
        </div>
    )
}
