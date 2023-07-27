import React from "react";
import { FaMoon } from "react-icons/fa";
import { BiSolidSun } from "react-icons/bi"
import { useState, useEffect } from "react";

export const Header = () => {
  
  const [theme, setTheme]= useState('light')
  
  useEffect(()=> {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  const handleClick= ()=> {
    setTheme(theme === "dark" ? "light":"dark")
  }
  console.log(theme)

  return (
    <div className="flex justify-between items-center px-4 lg:px-20 border-solid bg-white dark:text-white dark:bg-[#2B3844] h-20 shadow-md">
      <h5 className="font-extrabold text-sm lg:text-[24px] font-Nunito-sans">Where in the world?</h5>
        <span onClick={handleClick} >
          {
             theme === "light"? <FaMoon className="text-sm lg:text-[18px] shadow-sm fill-zinc-300 hover:fill-slate-800 hover:cursor-pointer" />:
             <BiSolidSun className="text-md lg:text-[18px] fill-slate-50 hover:fill-yellow-400 hover:cursor-pointer" />   
          }
        </span>    
        
    </div>  
  );
};
