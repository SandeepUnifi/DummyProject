import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../validationSchemas";
import { useForm } from "react-hook-form";
type SignupFormInputs = {
  name: string;
  email: string;
  password: string;
};
const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: yupResolver(signupSchema),
  });
  const onSubmit = (data: SignupFormInputs) => {
    console.log("Signup data:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="p-24 width-1/2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl bg-white rounded shadow-md lg:w-1/3">
        <h2 className="mb-4 text-2xl md:text-3xl lg-text-4xl font-bold text-center text-primary">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 relative">
            <input
              {...register("name")}
              type="text"
              placeholder=" "
              className="w-full px-3 py-2 mb-1 mt-4 border rounded-md focus:outline-none focus:ring focus:border-primary"
            />
            <label className="absolute top-6 left-3 px-1 transition-all duration-200 text-gray-500">
              Name
            </label>
            <p className="text-red-500">{errors.name?.message}</p>
          </div>
          <div className="mb-4 relative">
            <input
              {...register("email")}
              type="email"
              placeholder=" "
              className="w-full px-5 py-2 mb-1 mt-4 border rounded-md focus:outline-none focus:ring focus:border-primary"
            />
            <label className="absolute top-6 left-3 px-1 transition-all duration-200 text-gray-500">
              Email
            </label>
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div className="mb-4 relative">
            <input
              {...register("password")}
              type="password"
              placeholder=" "
              className="w-full px-3 mt-4 py-2 mb-1 border rounded-md focus:outline-none focus:ring focus:border-primary"
            />
            <label className="absolute top-6 left-3 px-1 transition-all duration-200 text-gray-500">
              Password
            </label>
            <p className="text-red-500">{errors.password?.message}</p>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-primary rounded hover:bg-primary-dark"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
