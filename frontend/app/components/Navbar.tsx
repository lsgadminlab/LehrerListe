"use client";

import { useState } from "react";

export const Navbar = () => {
  const [windowWidth, setWindowSize] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">{windowWidth}</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {windowWidth > 550 ? (
            <>
              <li>
                <a>Ticket-Liste</a>
              </li>
              <li>
                <a>Neues Ticket</a>
              </li>
            </>
          ) : (
            <li>
            <details>
              <summary>...</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Ticket-Liste</a>
                </li>
                <li>
                  <a>Neues Ticket</a>
                </li>
              </ul>
            </details>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
