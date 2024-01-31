import React, { useEffect, useState } from "react";
import usePlatformStore from "../../store";
import LogInPop from "../LogInPop";
import { user } from "../../api";

const Header = () => {
  const count = usePlatformStore((state) => state.count);
  const setAdd = usePlatformStore((state) => state.add);
  const clear = usePlatformStore((state) => state.clear);
  const [isOpen, setOpen] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const token = sessionStorage.getItem("access_token");
  const handleClose = () => {
    document.body.style.overflow = "auto";
    setOpen(false);
  };
  async function fetchData() {
    await user.getProfile(token).then((res) => {
      sessionStorage.setItem("user_info", JSON.stringify(res.data));
      setUserInfo(res.data);
    });
    setLogin(true);
  }
  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);
  return (
    <>
      <div className="w-full text-gray-900 bg-blue-500 sticky top-0">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 flex flex-row w-full items-center justify-between">
            <p
              href="#"
              className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg  focus:outline-none focus:shadow-outline">
              micro-frontends
            </p>
            <nav className="flex gap-5">
              <button
                className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-blue-400 rounded-lg  md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:shadow-outline"
                href="#">
                Products
              </button>
              <button
                className="px-4 py-2 mt-2 text-sm font-semibold text-white bg-blue-700 rounded-lg  md:mt-0  hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:shadow-outline"
                href="#"
                onClick={clear}>
                Clear Cart
              </button>
              <button
                className="px-4 py-2 mt-2 text-sm font-semibold text-white bg-blue-700 rounded-lg  md:mt-0  hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:shadow-outline"
                href="#"
                onClick={setAdd}>
                Add To Cart
              </button>
              <button className="relative cursor-default">
                <span className="absolute text-s -top-2 -right-2.5 p-1 w-6 h-6 text-center leading-none rounded-full bg-red-600 text-white">
                  {count}
                </span>
                <svg
                  stroke="currentColor"
                  fill="#ffff"
                  strokeWidth="0"
                  viewBox="-20 -75 550 650"
                  className="text-4xl  bg-blue-700 p-2 rounded-md"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
              </button>
              {isLogin ? (
                <div className="rounded-md overflow-hidden w-9 h-9">
                  <img className="w-full" src={userInfo.avatar} />
                </div>
              ) : (
                <button
                  onClick={() => {
                    setOpen(true);
                    document.body.style.overflow = "hidden";
                  }}>
                  <svg
                    stroke="currentColor"
                    strokeWidth="0"
                    fill="#ffff"
                    viewBox="0 0 496 512"
                    className="text-4xl  bg-blue-700 p-2 rounded-md"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                  </svg>
                </button>
              )}
            </nav>
          </div>
        </div>
      </div>
      {isOpen && <LogInPop handleClose={handleClose} />}
    </>
  );
};

export default Header;
