import React from "react";
import { useForm } from "react-hook-form";

export default function UseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
    mode: "onChange",
  });

  function submit(values) {
    console.log(values);
  }
  return (
    <div className="d-flex center container">
      <form onSubmit={handleSubmit(submit)}>
        <div className="d-flex flex-column mb-10">
          <label htmlFor="name" className="mb-10">
            Nom
          </label>
          <input
            {...register("name", {
              minLength: {
                value: 3,
                message: "3 caractères minimum",
              },
              required: {
                value: true,
                message: "Ce champ est requis",
              },
            })}
            type="text"
            id="name"
            className="mb-10"
          />
          {errors.name && <p className="text-error">{errors.name.message}</p>}
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}
