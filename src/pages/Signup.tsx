import React, { useState } from 'react';
import FormInput from '../component/FormInput';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Signed up with:', { name, email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-center text-primary">Sign Up</h2>
        <FormInput type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <FormInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <FormInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignup} className="w-full px-4 py-2 mt-4 text-white bg-primary rounded hover:bg-primary-dark">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;