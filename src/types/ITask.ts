export interface INewTask {
	title: string
	description: string
}

export default interface ITask {
	id: number
	title: string
	description: string
	creationDate: number
}
