type Todo = {
  id: number;
  title: string;
  isCompleted: boolean;
};

type Action =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "CHANGE_STATUS"; payload: number }
  | { type: "CHANGE_TITLE"; payload: { id: number; title: string } }
  | { type: "REMOVE_TODO"; payload: number };

type StateType = { todos: Todo[] };

type MainState = {
  state: StateType;
  dispatch: React.Dispatch<Action>;
};
