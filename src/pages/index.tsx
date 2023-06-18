import { type NextPage } from "next";
import { useState, type FormEvent } from "react";
import { useDispatch, useSelector } from "~/contextAPI/hooks";

const Home: NextPage = () => {
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

  // const changeStatus = (id: number) => {
  //   setTodos((prevTodos) => prevTodos.map((prevTodo) => prevTodo.id === id ?
  //     { ...prevTodo, isCompleted: !prevTodo.isCompleted }
  //     :
  //     prevTodo))
  // }
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
            <div key={todo.id} className="flex items-center p-2">
              {/* <CheckBox id={todo.id} changeStatus={changeStatus} isCompleted={todo.isCompleted} /> */}
              <h1 className={`text-2xl font-bold ${todo.isCompleted ? "line-through" : ""}`}>
                {todo.title}
              </h1>
            </div>
          ))
        }
      </div>
    </section>
  )
};

export default Home;
