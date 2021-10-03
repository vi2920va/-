import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../Form/Form';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

const TodoList = () => {
  const { todos } = useSelector((state) => state);
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
          {todos.map((todo, idx) => (
            <TodoItem key={todo.id} index={idx} todo={todo} />
          ))}
        </ul>
        <Form />
      </div>
    </main>
  );
};

// connect (리덕스 스토어를)
// const mapStateToProps = (state) => ({ todos: state.todos });
// export default connect(mapStateToProps)(TodoList);

export default TodoList;