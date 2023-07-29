import { useState } from "react";
import { Link } from "react-router-dom";
import ModalCreateTicket from "./ModalCreateTicket";

const NavItems = () => {
  return (
    <>
      <li>
        <Link to={"/open"}>Open Tickets </Link>
      </li>
      <li>
        <Link to={"/closed"}>Closed Tickets</Link>
      </li>
    </>
  );
};
export const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-m dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavItems></NavItems>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            lehrerliste v1
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul tabIndex={0} className="menu menu-horizontal px-1">
            <NavItems></NavItems>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
      <button
        className="btn btn-square fixed bottom-3 right-3 btn-primary z-10"
        onClick={() => setShow(true)}
      >
        +
      </button>
      <ModalCreateTicket show={show} onHide={() => setShow(false)} />
    </>
  );
};
