import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]); 
  };

  const toggleTaskCompletion = (index) => {
    const task = tasks[index];
    setCompletedTasks([...completedTasks, task]); 
    const newTasks = tasks.filter((_, i) => i !== index); 
    setTasks(newTasks); 
  };

  return (
    <div className="App">
      <h1>Asma To-Do List</h1>
      <TodoForm addTask={addTask} /> 

      <TodoList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
      <h2>completedTasks</h2>
      <ul>
        {completedTasks.map((task,index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

    
    </div>
  );
}

export default App;
