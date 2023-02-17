import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Nav/MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <>
      <ul className={classes.list}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="dataInsights">Data Insights</NavLink>
        <NavLink to="blog">Blog</NavLink>
        <NavLink to="logout">Logout</NavLink>
      </ul>
    </>
  );
};

export default MainNavigation;
