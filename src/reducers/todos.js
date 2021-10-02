const LOAD_TODOS = 'LOAD_TODOS';
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

export const loadToDos = () => ({
  type: LOAD_TODOS,
});

export const addTodo = (value) => ({
  type: ADD_TODO,
  value,
});

const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

const setTodoItem = (todos) => {
  localStorage.setItem('TODOS', JSON.stringify(todos));
};

export default function todos(state = [], action) {
  switch (action.type) {
    case LOAD_TODOS:
      return JSON.parse(localStorage.getItem('TODOS') || []);
      
    case ADD_TODO:
      const id = Date.now().toString();
      setTodoItem([...state, { id, value: action.value, isCompleted: false }]);

      return [
        ...state,
        {
          id,
          value: action.value,
          isCompleted: false,
        },
      ];

    default:
      return state;
  }
}
