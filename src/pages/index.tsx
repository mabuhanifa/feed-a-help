import { type NextPage } from "next";
import { useState, type FormEvent } from "react";

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 0,
      title: "title 1",
      isCompleted: false
    }
  ]);

  const [title, setTitle] = useState("");

  //create todo function
  const createTodo = (e: (FormEvent<HTMLFormElement | HTMLButtonElement>)) => {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, {
      id: todos.length + 1,
      title,
      isCompleted: false
    }]
    )
    setTitle("");
  };
  const changeStatus = (id: number) => {
    setTodos((prevTodos) => prevTodos.map((prevTodo) => prevTodo.id === id ?
      { ...prevTodo, isCompleted: !prevTodo.isCompleted }
      :
      prevTodo))
  }
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
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={todo.isCompleted}
                  onChange={() => changeStatus(todo.id)} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" ></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
              </label>
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
