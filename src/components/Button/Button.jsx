import React, { useState } from 'react';

const Button = ({ type = 'button', children, className, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick(isClicked);
  };
  
  return (
    <button type={type} className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
