"use client";

import Link from "next/link";
import { useState } from "react";

const initialValues = {
  email: "",
  password: "",
  isAgreed: false,
};

export default function SignUpForm() {
  const [form, setForm] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your sign up logic here
    console.log(form);
    setForm(initialValues);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 rounded bg-white p-6 shadow"
    >
      <div className="space-y-5">
        <div>
          <label className="mb-1 block font-medium">
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>
        <div>
          <label className="mb-1 block font-medium">
            Password:
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isAgreed"
            checked={form.isAgreed}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <span className="text-sm">
            I agree to the{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              Terms
            </Link>{" "}
            &{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
          </span>
        </div>
        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 text-white transition hover:bg-blue-700"
        >
          Create Account
        </button>
        <div className="mt-2 text-center text-sm">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </form>
  );
}
