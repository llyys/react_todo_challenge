import * as React from 'react';
import './todo-results.css';

export const TodoResults = () => {
  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
