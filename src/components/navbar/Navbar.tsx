import MenuButton from "@components/MenuButton";
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface LinkItemProps {
  to: string;
  children: React.ReactNode;
}

const LinkItem: React.FC<LinkItemProps> = ({ to, children }) => {
  const location = useLocation();
  const active = to === location.pathname;

  return (
    <li>
      <Link
        to={to}
        className={`${
          active ? "text-orange-400" : ""
        } rounded-md p-1.5 transition-[color] duration-300 ease-linear navitem`}
      >
        {children}
      </Link>
    </li>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-center py-4 bg-slate-800 fixed top-0 bg-opacity-30 backdrop-blur-md">
      <div className="w-4/5 max-w-4xl flex text-white justify-between md:justify-around items-center">
        <div className="basis-1/6 text-center">
          <Link
            to="/"
            className="inline-block text-3xl font-bold hover:scale-125 duration-500 ease-in-out "
          >
            Szelam
          </Link>
        </div>
        <MenuButton />
        <ul className="max-w-xl hidden basis-5/6 md:flex justify-evenly text-lg">
          <LinkItem to="/">Home</LinkItem>
          <LinkItem to="/aboutme">About Me</LinkItem>
          <LinkItem to="/github">Github</LinkItem>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
