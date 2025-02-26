// import React from "react";
// import { apiClient } from "../../config/apiConfig";
import React, { useContext, useState } from "react";
import { register } from "../../service/authService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { apiClient } from "../../config/apiConfig";

const Register = () => {
  const { setUser, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.target);

    const body = {
      username: form.get("username"),
      password: form.get("password"),
      email: form.get("email"),
      birthDate: form.get("birthDate"),
      gender: form.get("gender"),
    };

    try {
      const data = await register(body);
      toast.success("Muvaffaqiyatli ro‘yxatdan o‘tildi!");
      setError("");
      console.log(data);
      setUser(data.user);
      setToken(data.accessToken);
      apiClient.defaults.headers.common["Authorization"] =
        "Bearer " + data.token;
      navigate("/");
    } catch (error) {
      let errorMsg = "Xato yuz berdi!";
      if (error.res) {
        errorMsg = "Registratsiyada xatolik: " + error.res.data.message;
      } else {
        errorMsg = "Xato: " + error.message;
      }
      toast.error(errorMsg);
      setError(errorMsg);
    } finally {
    }
  }

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto mt-10"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="birthDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Birth Date
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="gender"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        {/* {error && <p className="text-red-500 text-xs italic">{error}</p>} */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
