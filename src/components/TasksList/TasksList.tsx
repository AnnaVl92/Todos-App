import * as React from 'react';
import IState from '../../types/IState';
import ITask from '../../types/ITask';

const TasksList = (tasksInState: IState) => {
    const todos = (tasksInState.tasks || []).map((task: ITask) => 
        <div className="col-4" key={task.id}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-between">
                        {task.title}
                        <button type="button" className="btn btn-close"></button>
                    </h5>
                    <p className="card-text">{task.description}</p>
                    <p className="card-text">Created: {task.date}</p>
                </div>
            </div>
        </div>
    )
    return <div className="row">{todos}</div>
}

export default TasksList