// import React from "react";
// import { apiClient } from "../../config/apiConfig";
import React, { useState } from "react";
import { register } from "../../service/authService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
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
      const res = await register(body);
      toast.success("Muvaffaqiyatli ro‘yxatdan o‘tildi!");
      setError("");
    } catch (error) {
      let errorMsg = "Xato yuz berdi!";
      if (error.res) {
        errorMsg = "Registratsiyada xatolik: " + error.res.data.message;
      } else {
        errorMsg = "Xato: " + error.message;
      }
      toast.error(errorMsg);
      setError(errorMsg);
    }
  }

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="birthDate">Birth Date:</label>
          <input type="date" id="birthDate" name="birthDate" />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        {/* <div>{error && <p style={{ color: "red" }}>{error}</p>}</div> */}
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
