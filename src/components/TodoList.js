import React from "react";


function TodoList ({tasks ,toggleTaskCompletion}){
    return (
        <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
             type="checkbox" 
             id={`task-${index}`} 
             onChange={() => toggleTaskCompletion(index)}
             />
             
            <label htmlFor={`task-${index}`}>
              {index + 1}. {task}
            </label>
          </li>
        ))}
      </ul>

    );
}

export default TodoList;