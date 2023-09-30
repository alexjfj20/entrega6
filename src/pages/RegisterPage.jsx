import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";




const RegisterPage = () => {
  const { reset, handleSubmit, register } = useForm();

  const { registerUser } = useAuth();

  const submit = (data) => {
    registerUser(data);
    reset({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <img src="/images/niños.png" alt="" />
      <h1>Resgistrate</h1>
      <article>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="email">Email</label>
            <input {...register("email")} type="email" id="email" />
          </div>
          <div>
            <label htmlFor="name">name</label>

            <input {...register("name")} type="text" id="name" />
          </div>

          <div>
            <label htmlFor="password">Password</label>

            <input {...register("password")} type="password" id="password" />
          </div>

          <button>Submit</button>
        </form>
        <p>
          ¿ Tu tienes una cuenta ?{" "}
          <Link to={"/auth/login"}>inicia seccion</Link>
        </p>
      </article>
    </div>
  );
};

export default RegisterPage;
