import * as React from 'react';
import IState from '../../redux/types/IState';
import ITask from '../../redux/types/ITask';

const TasksList = (tasksInState: IState) => {
    const todos = (tasksInState.tasks || []).map((task: ITask) => 
        <li className="list-group-item d-flex align-items-center justify-content-between" key={task.id}>
            {task.text}
            <button type="button" className="btn btn-danger btn-sm">Delete</button>
        </li>
    )
    return <ul className="list-group">{todos}</ul>
}

export default TasksList