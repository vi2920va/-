import React from 'react';
import './TodoList.scss';

const TodoList = () => {
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
          <li>
            <span>Code a todo list</span>
            <input type="checkbox" aria-label="todo checkbox value" />
            <button type="button" className="delete-btn">
              <i className="fas fa-trash" />
            </button>
          </li>
        </ul>

        <div className="toggle-btn-wrapper">
          <span>Move done items at the end?</span>
          <input type="checkbox" aria-label="toggle btn checkbox" />
        </div>

        <form className="add-form">
          <h2>Add to the todo list</h2>
          <input
            type="text"
            className="add-input"
            aria-label="add input text"
          />
          <button type="submit" className="add-btn" name="ADD ITEM" />
        </form>
      </div>
    </main>
  );
};

export default TodoList;
