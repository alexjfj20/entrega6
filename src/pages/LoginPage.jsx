import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const { register, reset, handleSubmit } = useForm();

  const { loginUser } = useAuth();

  const submit = (data) => {
    loginUser(data);
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <img src="/images/mujes.png" alt="" />
      <h1>Login</h1>
      <article>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="email">Email</label>

            <input {...register("email")} type="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>

            <input {...register("password")} type="password" id="password" />
          </div>

          <button>Submit</button>
        </form>
        <p>
          ¿tiene una cuenta ? <Link to={"/auth/register"}>Registrese</Link>
        </p>
      </article>
    </div>
  );
};

export default LoginPage;
