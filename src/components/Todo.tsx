import CheckBox from "./CheckBox";

export default function Todo({ todo }: { todo: Todo }) {
    return (
        <div key={todo.id} className="flex items-center p-2">
            <CheckBox key={todo.id} todo={todo} />
            <h1 className={`text-2xl font-bold ${todo.isCompleted ? "line-through" : ""}`}>
                {todo.title}
            </h1>
        </div>
    )
}
