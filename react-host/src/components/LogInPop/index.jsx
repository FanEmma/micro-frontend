import React, { useEffect, useState } from "react";
import Popup from "../Popup";
import { user } from "../../api";

const LogInPop = ({ handleClose }) => {
  const [inputs, setInputs] = useState({
    email: "admin@mail.com",
    password: "admin123",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = {
      email: inputs.email,
      password: inputs.password,
    };
    user.login(formData).then((res) => {
      sessionStorage.setItem("access_token", res.access_token);
      handleClose();
    });
  };

  return (
    <Popup
      handleClose={handleClose}
      title="Log In"
      content={
        <div className="px-5 py-7">
          <form onSubmit={handleSubmit}>
            <label className="font-semibold text-sm text-left text-gray-600 pb-1 block">
              E-mail
            </label>
            <input
              type="e-mail"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              required
            />
            <label className="font-semibold text-sm text-left text-gray-600 pb-1 block">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 mt-1 mb-8 text-sm w-full"
              required
            />
            <input
              type="submit"
              className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              value="Login"
            />
          </form>
        </div>
      }
    />
  );
};

export default LogInPop;
