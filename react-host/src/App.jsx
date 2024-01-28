import React, { useRef, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import FooterWrapper from "solid_remote/FooterWrapper";
import ProductsListWrapper from "vue_remote/ProductsListWrapper";
import FilterNavigationWrapper from "vue_remote/FilterNavigationWrapper";
import Loader from "./components/Loader";
import { subscribe, publish } from "./utility";
import usePlatformStore from "./store";

import "./index.scss";

const App = () => {
  const footerRef = useRef(null);
  const productsListRef = useRef(null);
  const filterNavigationRef = useRef(null);
  const isLoading = usePlatformStore((state) => state.isLoading);
  const setLoading = usePlatformStore((state) => state.setLoading);
  const eventName = "fetchEvent";

  useEffect(() => {
    publish(eventName, false);
    subscribe(eventName, (e) => {
      const isLoading = e.detail;
      setLoading(isLoading);
    });
    FooterWrapper(footerRef.current);
    ProductsListWrapper(productsListRef.current);
    FilterNavigationWrapper(filterNavigationRef.current);
  }, []);

  return (
    <div className="mx-auto h-screen flex flex-col justify-between">
      {isLoading && <Loader />}
      <div>
        <Header />
        <div className="max-w-screen-xl mx-auto md:px-6 flex justify-center items-start py-5 gap-5">
          <div ref={productsListRef} className="lg:w-10/12"></div>
          <div ref={filterNavigationRef} className="lg:w-2/12"></div>
        </div>
      </div>
      <div ref={footerRef}></div>
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);
