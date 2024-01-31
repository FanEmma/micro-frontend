import { createSignal } from "solid-js";
import { subscribe } from "react_host/event";
import "./style.css";

export default () => {
  const [isLogin, setLogin] = createSignal(false);
  const [userInfo, setUserInfo] = createSignal({});
  const eventName = "isLoginEvent";
  subscribe(eventName, (e) => {
    setLogin(e.detail);
    setUserInfo(JSON.parse(sessionStorage.getItem("user_info")));
  });

  return (
    <div class="user-profile-card w-56 h-full p-4 min-h-64 bg-white rounded-md relative flex flex-col justify-center items-center">
      {isLogin() ? (
        <>
          <span class="text-blue-600 text-base pb-3">User Profile</span>
          <div className="rounded-md overflow-hidden w-24 h-24 mb-3">
            <img className="w-full" src={userInfo().avatar} />
          </div>
          <div className="flex flex-col justify-start border-t-2 p-2">
            <p className="text-gray-900">Name: {userInfo().name}</p>
            <p className="text-gray-900">Email: {userInfo().email}</p>
            <p className="text-gray-900">Role: {userInfo().role}</p>
          </div>
          {/* <button className="px-4 py-2 mt-2 w-full text-sm text-white bg-blue-700 rounded-lg  md:mt-0  hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:shadow-outline">
            Logout
          </button> */}
        </>
      ) : (
        <p>未登入</p>
      )}
    </div>
  );
};
