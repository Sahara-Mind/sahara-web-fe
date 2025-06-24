'use client';

import { useState } from 'react';

export default function SignInForm() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    rememberMe: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow space-y-5"
    >
      <div>
        <label className="block mb-1 font-medium">
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>
      <div>
        <label className="block mb-1 font-medium">
          Password:
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="rememberMe"
          checked={form.rememberMe}
          onChange={handleChange}
          className="mr-2"
        />
        <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700 select-none cursor-pointer">
          Remember Me
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Sign In
      </button>
      <div className="text-center mt-2">
        <a href="#" className="text-blue-600 hover:underline text-sm">
          Forgot Password?
        </a>
      </div>
      <div className="text-center mt-2 text-sm">
        Don’t have an account?{' '}
        <a href="#" className="text-blue-600 hover:underline">
          Sign Up
        </a>
      </div>
      </form>
  );
}