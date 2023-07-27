"use client";

import ModalCreateTicket from "./ModalCreateTicket";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const doneTicketsText = "Erledigte Tickets";
  const openTicketsText = "Offene Tickets";

  const { push } = useRouter();

  const modalRef = useRef();

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.openModal();
    }
  };
  function handleopenTicketsClick() {
    push("/openTickets");
  }

  function handledoneTicketsClick() {
    push("/doneTickets");
  }

  function handeHomeClick() {
    push("/");
  }

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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={handledoneTicketsClick}>
                <a>{doneTicketsText}</a>
              </li>
              <li onClick={handleopenTicketsClick}>
                <a>{openTicketsText}</a>
              </li>
            </ul>
          </div>
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={handeHomeClick}
          >
            Lehrerliste
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 content-center">
            <li onClick={handledoneTicketsClick}>
              <a>{doneTicketsText}</a>
            </li>
            <li onClick={handleopenTicketsClick}>
              <a>{openTicketsText}</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
      <button
        className="btn btn-square fixed bottom-3 right-3 btn-primary z-10"
        onClick={openModal}
      >
        +
      </button>
      <ModalCreateTicket
        name="Test"
        onChange={() => {}}
        value="Test"
        ref={modalRef}
      />
    </>
  );
};
