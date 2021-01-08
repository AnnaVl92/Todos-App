import React from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/actions"
import { useForm } from 'react-hook-form';
import IFormData from "../../types/IFormData"

function AddTaskForm () {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm<FormData>();
    const onSubmit = (data: IFormData) => {
        const newTask = {
            title: data.title,
            description: data.description
        };
        dispatch(addTask(newTask))
    };
 
    return (
        <form className="mb-5" onSubmit={ handleSubmit(onSubmit) }>
            <div className="mb-3">
                <label
                    className="form-label"
                    htmlFor="title"
                >
                    Add task's title:
                </label>
                <input
                    name="title"
                    className="form-control"
                    type="text"
                    ref={register}
                />
            </div>
            <div className="mb-3">
                <label
                    className="form-label"
                    htmlFor="description"
                >
                    Add task's description:
                </label>
                <textarea
                    name="description"
                    className="form-control"
                    ref={register}
                    rows={3}
                />
            </div>
            <button type="submit" className="btn btn-primary" value="Submit">Submit</button>
        </form>
    );
}

export default AddTaskForm;