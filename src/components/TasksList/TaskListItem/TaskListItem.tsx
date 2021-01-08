import * as React from 'react';
import ITask from '../../../types/ITask';
import * as Icon from 'react-feather';
import EditTaskModal from "../../EditTaskModal/EditTaskModal"

const TasksListItem = (task:ITask) => {
    const taskContext = React.createContext<ITask>({
        id: task.id,
        title: task.title,
        description: task.description,
        date: task.date
    });

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-between align-items-center">
                    {task.title}
                    <div className="btn-group d-flex align-items-center" role="group">
                        <EditTaskModal />
                        <button type="button" aria-label="Close" className="btn btn-outline-secondary d-flex align-items-center">
                            <Icon.X size={20} />
                        </button>
                    </div>
                </h5>
                <p className="card-text">{task.description}</p>
                <p className="card-text">Created: {task.date}</p>
            </div>
        </div>
    )
}

export default TasksListItem