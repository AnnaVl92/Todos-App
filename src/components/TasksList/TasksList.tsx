import * as React from 'react'
import IState from '../../types/IState'
import ITask from '../../types/ITask'
import TasksListItem from './TaskListItem/TaskListItem'

const TasksList = (tasksInState: IState) => {
	const todos = (tasksInState.tasks || []).map((task: ITask) =>
		<div className="col-4" key={task.id}>
			<TasksListItem {...task} />
		</div>,
	)
	return <div className="row">{todos}</div>
}

export default TasksList
