import React, { useState } from 'react';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = (e) => {
    e.preventDefault();
    // Handle sign-in logic here (e.g., API call)
    console.log('Signing in with:', { email, password });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-full max-w-md bg-gray-900 p-8 border border-gray-700 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign In</h2>
        <form onSubmit={handleSignin}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-black py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-200"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Don't have an account? <a href="/signup" className="text-green-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
