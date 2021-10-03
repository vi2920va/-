const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SAVE_TODO = 'EDIT_TODO';

export const addTodo = (value) => ({
  type: ADD_TODO,
  value,
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  index,
});

export const saveTodo = (item, index) => ({
  type: SAVE_TODO,
  item,
  index,
});

export default function todos(state = [], action) {
  let list = [...state];
  switch (action.type) {
    case ADD_TODO:
      const id = Date.now().toString();
      return [
        ...state,
        {
          id,
          value: action.value,
          isCompleted: false,
        },
      ];

    case DELETE_TODO:
      list.splice(action.index, 1);
      return list;

    case SAVE_TODO:
      list.splice(action.index, action.item);
      return list;

    default:
      return state;
  }
}
