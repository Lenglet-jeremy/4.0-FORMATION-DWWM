import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Yup() {
  const schema = yup.object({
    name: yup
      .string()
      .required("Le champ est obligatoire")
      .min(2, "trop court")
      .max(12, "trop long")
      .test("isYes", "Vous n'avez pas de chance", async () => {
        const response = await fetch("https://yesno.wtf/api");
        const result = await response.json();
        console.log(result);
        return result.answer === "yes";
      }),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,4}$/,
        "Email non valide"
      )
      .required("Le champ est obligatoire"),
    age: yup
      .number()
      .typeError("Veuillez entrer un nombre")
      .min(18, "Vous devez être majeur"),
    password: yup
      .string()
      .required("Le mot de passe est obligatoire")
      .min(5, "trop court")
      .max(10, "trop long"),
    confirmPassword: yup
      .string()
      .required("Vous devez confirmer votre mot de passe")
      .oneOf([yup.ref("password"), ""], "Les mots ne correspondent pas"),
  });
  const { register, handleSubmit, formState: { errors }, } = useForm({ defaultValues: { name: "", }, mode: "onChange", resolver: yupResolver(schema), });

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
          <label htmlFor="email" className="mb-10">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="mb-10"
          />
          {errors.email && <p className="text-error">{errors.email.message}</p>}
        </div>
        <div className="d-flex flex-column mb-10">
          <label htmlFor="age" className="mb-10">
            Age
          </label>
          <input
            {...register("age")}
            type="number"
            id="age"
            className="mb-10"
          />
          {errors.age && <p className="text-error">{errors.age.message}</p>}
        </div>
        <div className="d-flex flex-column mb-10">
          <label htmlFor="password" className="mb-10">
            Mot de passe
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="mb-10"
          />
          {errors.password && (
            <p className="text-error">{errors.password.message}</p>
          )}
        </div>
        <div className="d-flex flex-column mb-10">
          <label htmlFor="confirmPassword" className="mb-10">
            Confirmation de mot de passe
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            id="confirmPassword"
            className="mb-10"
          />
          {errors.confirmPassword && (
            <p className="text-error">{errors.confirmPassword.message}</p>
          )}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
