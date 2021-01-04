import React from 'react';
import AddTaskForm from './containers/AddTaskForm/AddTaskForm';
import TasksList from './components/TasksList/TasksList';
import { useSelector } from 'react-redux';
import IState from './redux/types/IState'

const App = () => {
    const tasksInState: IState = {
        tasks: useSelector((state: IState )=> state.tasks),
    };
    return (
        <div className="container">
            <>
                <h1 className="mt-3 text-center">To Do List</h1>
                <AddTaskForm />
                <div className="row">
                    <div className="col-6">
                        <TasksList {...tasksInState} />
                    </div>
                </div>
            </>
        </div>
    )
}

export default App;