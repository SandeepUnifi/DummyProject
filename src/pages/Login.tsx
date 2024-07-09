import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validationSchemas";

type LoginFormInputs = {
  email: string;
  password: string;
};

export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login data:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="p-24 width-1/2 bg-white rounded shadow-md lg:w-1/3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl ">
        <h2 className="mb-4 text-2xl md:text-3xl lg-text-4xl font-bold text-center text-primary">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 mb-1 border rounded-md focus:outline-none focus:ring focus:border-primary"
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div className="mb-4">
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 mb-1 border rounded-md focus:outline-none focus:ring focus:border-primary"
            />
            <p className="text-red-500">{errors.password?.message}</p>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-primary rounded hover:bg-primary-dark"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
