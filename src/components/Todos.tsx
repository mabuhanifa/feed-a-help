import { useState, type FormEvent } from "react";
import { useDispatch, useSelector } from "~/contextAPI/hooks";
import Todo from "./Todo";

export default function Todos() {
    const dispatch = useDispatch();
    const todos = useSelector((s) => s.todos);

    const [title, setTitle] = useState("");

    //create todo function
    const createTodo = (e: (FormEvent<HTMLFormElement | HTMLButtonElement>)) => {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload:
            {
                id: todos.length + 1,
                title,
                isCompleted: false
            }
        });
        setTitle("");
    };
    return (
        <section className="p-10">
            <form onSubmit={(e) => createTodo(e)}>
                <input
                    type="text"
                    name="title"
                    value={title}
                    className="bg-gray-300 rounded-md p-2"
                    onChange={(e) => setTitle(e.target.value)} />
                <button type="submit" onSubmit={(e) => createTodo(e)}>Add</button>
            </form>
            <div>
                {
                    todos && todos.map((todo) => (
                        <Todo key={todo.id} todo={todo} />
                    ))
                }
            </div>
        </section>
    )
}
