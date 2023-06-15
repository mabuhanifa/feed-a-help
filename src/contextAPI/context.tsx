import { createContext, useContext, useReducer, type ReactNode } from "react";

export const Context = createContext({} as MainState);

export const initialState: StateType = {
    todos: [],
};

const reducer = (state: StateType, action: Action) => {
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

export const Provider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Context.Provider value={{ state, dispatch }}>
        {children}
    </Context.Provider>
}

export function useSelector<T>(selector: (state: StateType) => T) {
    const { state } = useContext(Context);
    return selector(state);
}

export function useDispatch() {
    const { dispatch } = useContext(Context);
    return dispatch;
}