import React, { useState } from "react";
import FormInput from "../component/FormInput";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log("Logged in with:--", { email, password });
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-center text-primary">
        Login
      </h2>
      <FormInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="w-full px-4 py-2 mt-4 text-white bg-primary rounded hover:bg-primary-dark"
      >
        Login
      </button>
    </div>
  );
};
