import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function CheckboxRadioSelect() {
  const schema = yup.object({
    name: yup
      .string()
      .required("Le champ est obligatoire")
      .min(2, "trop court")
      .max(12, "trop long"),
  });

  const defaultValues = {
    name: "",
    gender: "woman",
    newsletter: false,
    techno: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
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
            {...register("name")}
            type="text"
            id="name"
            className="mb-10"
          />
          {errors.name && <p className="text-error">{errors.name.message}</p>}
        </div>
        <div className="d-flex flex-column mb-10">
          <label htmlFor="gender" className="mb-10">
            Genre
          </label>
          <div>
            <label htmlFor="woman">Femme</label>
            <input
              {...register("gender")}
              type="radio"
              id="woman"
              className="mb-10"
              value="woman"
            />
          </div>
          <div>
            <label htmlFor="man">Homme</label>
            <input
              {...register("gender")}
              type="radio"
              id="man"
              className="mb-10"
              value="man"
            />
          </div>
          <div>
            <label htmlFor="other">Autre</label>
            <input
              {...register("gender")}
              type="radio"
              id="other"
              className="mb-10"
              value="other"
            />
          </div>
        </div>
        <div className="d-flex flex-column mb-10">
          <label htmlFor="newsletter" className="mb-10">
            Newsletter
            <input
              {...register("newsletter")}
              type="checkbox"
              id="newsletter"
            />
          </label>
        </div>
        <div className="d-flex flex-column mb-10">
          <label className="mb-10" htmlFor="techno">
            Votre techno préférée
          </label>
          <select id="techno" {...register("techno")}>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="react">React</option>
            <option value="node">Node</option>
            <option value="sql">SQL</option>
            <option value="php">PHP</option>
          </select>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
