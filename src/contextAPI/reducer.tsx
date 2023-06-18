export const initialState: StateType = {
    todos: [{
        id: 0,
        title: "title 1",
        isCompleted: false
    }],
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
                todos: state.todos.map((todo) => todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo)
            }
        default:
            throw new Error();
    }
}