export const initialState: StateType = {
  todos: [
    {
      id: 1,
      title: "Learn React",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Learn NextJS",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Learn Kubernetes",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Learn Golang",
      isCompleted: false,
    },
  ],
};

export const reducer = (state: StateType, action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "CHANGE_STATUS":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "CHANGE_TITLE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, title: action.payload.title }
            : todo
        ),
      };
    default:
      throw new Error();
  }
};
