import { type NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 0,
      title: "title 1",
      isCompleted: false
    }
  ]);
  const [title, setTitle] = useState("");

  return (
    <section>
      <div></div>
    </section>
  )
};

export default Home;
