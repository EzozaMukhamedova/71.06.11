import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const loginData = {
      email: form.email.value,
      password: form.password.value,
    };

    try {
      const response = await axios.post("/auth/login", loginData);
      console.log("Login success:", response.data);
      if (response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;
        navigate("/");
      }
    } catch (error) {
      console.error(
        "Login error:",
        error.response ? error.response.data.message : error.message
      );
      setErrorMessage(
        error.response ? error.response.data.message : error.message
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <div className="flex justify-center">
          <FaInstagram className="h-12 w-auto text-gray-900" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email address"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Password"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          {errorMessage && (
            <div className="text-red-500 text-sm text-center">
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
          >
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
}
