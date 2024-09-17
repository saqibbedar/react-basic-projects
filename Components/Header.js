"use client";
import { useState } from "react";
import Link from "next/link";

let navItems = ["Home", "About", "Work", "Contact"];

const Header = () => {
  const [menuItem, setMenuItem] = useState("Home");

  return (
    <>
      <div className="bg-green-500 flex justify-between items-center">
        <a>
          <Link href={"/"} className="py-4 ml-6 text-xl cursor-pointer">
            Random Images
          </Link>
        </a>
        <div className="flex mr-6 text-xl">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item === "Home" ? "/" : item}
              className={`py-4 px-6 ${item === menuItem ? "bg-zinc-200 transition-all ease-linear" : ""}`}
              onClick={() => setMenuItem(item)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Header;
