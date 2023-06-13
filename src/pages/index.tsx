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
