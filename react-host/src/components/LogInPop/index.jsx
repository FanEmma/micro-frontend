import React from "react";
import Popup from "../Popup";

const LogInPop = ({ handleClose }) => {
  return (
    <Popup
      handleClose={handleClose}
      title="Log In"
      content={
        <div class="px-5 py-7">
          <label class="font-semibold text-sm text-left text-gray-600 pb-1 block">
            E-mail
          </label>
          <input
            type="e-mail"
            class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
          <label class="font-semibold text-sm text-left text-gray-600 pb-1 block">
            Password
          </label>
          <input
            type="password"
            class="border rounded-lg px-3 py-2 mt-1 mb-8 text-sm w-full"
          />
          <button
            type="button"
            class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span class="inline-block mr-2">Login</span>
          </button>
        </div>
      }
    />
  );
};

export default LogInPop;
