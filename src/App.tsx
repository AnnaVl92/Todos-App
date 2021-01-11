import React, { useEffect } from 'react';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import TasksList from './components/TasksList/TasksList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAll } from "./redux/actions/actions"
import IState from './types/IState'

const App = () => {
    const dispatch = useDispatch();
    const tasksInState: IState = {
        tasks: useSelector((state: IState )=> state.tasks),
    };
    useEffect(() => {
        console.log('useEffect')
        dispatch(fetchAll());
    },[dispatch])
    return (
        <div className="container">
            <>
                <h1 className="mt-3 text-center">To Do List</h1>
                <AddTaskForm />
                <TasksList {...tasksInState} />
            </>
        </div>
    )
}

export default App;