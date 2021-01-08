import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

const EditTaskForm = () => {
    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label
                    className="form-label fw-normal fs-6"
                    htmlFor="editedTitle"
                >
                    Edit task's title:
                </label>
                <input
                    name="editedTitle"
                    className="form-control"
                    type="text"
                    ref={register}
                />
            </div>
            <div className="mb-3">
                <label
                    className="form-label fw-normal fs-6"
                    htmlFor="editedDescription"
                >
                    Edit task's description:
                </label>
                <textarea
                    name="editedDescription"
                    className="form-control"
                    ref={register}
                    rows={3}
                />
            </div>
            <button type="submit" className="btn btn-primary" value="Submit">Submit</button>
        </form>
    );
}

export default EditTaskForm