import React from "react";
import { Outlet } from "react-router";

export const WithoutNav = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
