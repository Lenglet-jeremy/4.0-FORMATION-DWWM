import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPassword } from "../../apis/users";

export default function ForgotPassword() {
  const yupSchema = yup.object({
    email: yup
      .string()
      .required("Le champ est obligatoire")
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Votre email n'est pas valide"
      ),
  });

  const defaultValues = {
    email: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(yupSchema),
  });

  async function submit(values) {
    console.log(values);
    try {
      const response = await forgotPassword(values.email);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="d-flex flex-column center flex-fill">
      <h1>Mot de passe oublié ?</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div className="d-flex flex-column mb-20">
          <label htmlFor="email" className="mb-10">
            Veuillez saisir votre email
          </label>
          <input {...register("email")} type="text" id="email" />
          {errors?.email && (
            <p className="feedbackText">{errors.email.message}</p>
          )}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
