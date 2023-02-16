import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/UI/Header/Header";

const RootLayout = (props) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        {props.children}
      </main>
    </>
  );
};

export default RootLayout;
