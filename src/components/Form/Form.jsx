import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../reducers/todos';
import './Form.scss';

const Form = () => {

  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleInput = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  };
  return (
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
  );
};

export default Form;
