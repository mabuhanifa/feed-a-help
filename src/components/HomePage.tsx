import CreateTodo from "./CreateTodo";
import Footer from "./Footer";
import TodoList from "./TodoList";

export default function HomePage() {
  return (
    <section className="p-2 py-10 md:p-10 ">
      <CreateTodo />
      <TodoList />
      <Footer />
    </section>
  );
}
