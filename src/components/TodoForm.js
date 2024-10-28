import React, {useState} from "react";
import { TextField, Button } from '@mui/material';

function TodoForm({addTask}) {
    const [task, setTask] =useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            addTask(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
            label="Add a new task"
            variant="outlined"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{ flex: 1, marginRight: '10px' }}
            />
            <Button type="submit" variant="contained" color="primary">Add Task</Button>
         </form>
    );
}


export default TodoForm;