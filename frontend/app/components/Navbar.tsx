"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import ModalTextInputField from "./ModalTextInput";

export const Navbar = () => {
  const firstText = "Neues Ticket";
  const secondText = "Ticket Liste";

  const { push } = useRouter();

  const modalRef = useRef();

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.openModal();
    }
  };

  function handleSecondTextClick() {
    push("/ticketList");
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
              <li onClick={openModal}>
                <a>{firstText}</a>
              </li>
              <li onClick={handleSecondTextClick}>
                <a>{secondText}</a>
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
            <li onClick={() => openModal()}>
              <a>{firstText}</a>
            </li>
            <li onClick={handleSecondTextClick}>
              <a>{secondText}</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
      <ModalTextInputField
        name="Test"
        onChange={() => {}}
        value="Test"
        ref={modalRef}
      />
    </>
  );
};
