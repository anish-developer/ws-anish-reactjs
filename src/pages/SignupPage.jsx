import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import API from "../api/axios";

function SignupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/signup", form);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={submitHandler}>
        <h2>Signup</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={changeHandler}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler}
        />

        <button type="submit">Signup</button>

        <p>
          Already have account?
          <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default SignupPage;
