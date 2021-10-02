import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { addTodo } from '../../reducers/todos';
import './TodoList.scss';

const TodoList = ({ todos }) => {
  console.log('todos', todos);

  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  };

  return (
    <main className="todo">
      <div className="todo-container">
        <h1 className="todo-title">
          Todo List
          <span className="todo-explanation">
            Get things done. one item a time.
          </span>
        </h1>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.value}</span>
              <div>
                <button type="button" className="delete-btn">
                  <i className="fas fa-trash" />
                </button>
              </div>
            </li>
          ))}
        </ul>

        <form className="add-form" onSubmit={handleSubmit}>
          <h2>Add to the todo list</h2>
          <input
            type="text"
            className="add-input"
            aria-label="add input text"
            value={value}
            onChange={handleInput}
          />
          <button type="submit" className="add-btn">
            ADD ITEM
          </button>
        </form>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({ todos: state.todos });

export default connect(mapStateToProps)(TodoList);
