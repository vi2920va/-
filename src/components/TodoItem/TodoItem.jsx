import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, saveTodo } from '../../reducers/todos';
import './TodoItem.scss';

const TodoItem = ({ todo, index }) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(todo.value || '');

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(index));
  };

  const handleEdit = () => {
    setActive(true);
  };

  const handleInput = (event) => {
    const { value } = event.target;
    if (event.type === 'change') {
      setValue(value);
    }
  };

  const handleSave = () => {
    dispatch(saveTodo(Object.assign(todo, { value })), index);
    setActive(false);
  };

  return (
    <li key={todo.id} className="todo-item">
      {!active && <span>{todo.value}</span>}
      {active && (
        <input
          type="text"
          value={value}
          aria-label="todos edit text"
          onChange={handleInput}
        />
      )}
      <div>
        <button type="button" className="delete-btn" onClick={handleDelete}>
          <i className="fas fa-trash" />
        </button>
        {!active && (
          <button type="button" className="edit-btn" onClick={handleEdit}>
            <i className="fas fa-edit" />
          </button>
        )}
        {active && (
          <button type="button" className="save-btn" onClick={handleSave}>
            <i className="fas fa-save" />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
