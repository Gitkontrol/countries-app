import React from "react";
import { FaMoon } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 border-solid bg-white h-20 shadow-md">
      <h5 className="text-bold">Where in the world?</h5>
      <FaMoon className="text-sm shadow-md fill-slate-800" />
    </div>
  );
};
