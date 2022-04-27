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
      <Link to={to} className={`${active ? "bg-teal-500 text-black" : ""} rounded-md p-2 transition-[background-color] duration-500 ease-linear navitem`}>
        {children}
      </Link>
    </li>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center mt-2 mb-4">
      <div className="w-full max-w-4xl flex text-white justify-around items-center text-2xl">
        <div className="basis-1/6 text-center">
          <Link
            to="/"
            className="inline-block text-3xl hover:scale-125 duration-500 ease-in-out "
          >
            Szelam
          </Link>
        </div>
        <ul className="max-w-xl basis-5/6 flex justify-evenly">
          <LinkItem to="/aboutme">About Me</LinkItem>
          <LinkItem to="/works">Works</LinkItem>
          <LinkItem to="/github">Github</LinkItem>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
