export const initialState: StateType = {
    todos: [],
};

export const reducer = (state: StateType, action: Action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };

        default:
            throw new Error();
    }
}