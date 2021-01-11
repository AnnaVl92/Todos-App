import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import IState from '../../../types/IState'
import ITask from "../../../types/ITask"
import { editTask } from "../../../redux/actions/actions"

const EditTaskForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm<ITask>();
    const taskSelector = useSelector((state: IState ) => state.task);
    const { task } = { task: taskSelector};
    const onSubmit: SubmitHandler<ITask> = ( data )=> {
        data.id = taskSelector?.id as ITask["id"];
        data.creationDate = taskSelector?.creationDate as ITask["creationDate"]
        dispatch(editTask(data));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label
                    className="form-label fw-normal fs-6"
                    htmlFor="title"
                >
                    Edit task's title:
                </label>
                <input
                    name="title"
                    className="form-control"
                    type="text"
                    ref={register}
                    defaultValue={task?.title}
                />
            </div>
            <div className="mb-3">
                <label
                    className="form-label fw-normal fs-6"
                    htmlFor="description"
                >
                    Edit task's description:
                </label>
                <textarea
                    name="description"
                    className="form-control"
                    ref={register}
                    rows={3}
                    defaultValue={task?.description}
                />
            </div>
            <div className="modal-footer border-top-0 p-0">
                <button type="submit" className="btn btn-primary" value="Submit">Submit</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </form>
    );
}

export default EditTaskForm