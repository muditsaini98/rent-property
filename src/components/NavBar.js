import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyWindow } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div>
      <nav className="flex items-center flex-col justify-between py-5 border-b-2 md:flex-row">
        <ul className="flex items-center flex-col md:flex-row">
          <li className="mx-14 font-bold text-2xl text-violet-900">
            <a href="#">
              <FontAwesomeIcon icon={faHouseChimneyWindow} className="mx-2" />
              ESTATES
            </a>
          </li>
          <li className="mx-7 font-medium bg-violet-100 py-1 px-3 rounded-md text-violet-500">
            <a href="#">Rent</a>
          </li>
          <li className="mx-7 font-medium active:bg-violet-100 py-1 px-3 active:rounded-md active:text-violet-500">
            <a href="#">Buy</a>
          </li>
          <li className="mx-7 font-medium active:bg-violet-100 py-1 px-3 active:rounded-md active:text-violet-500">
            <a href="#">Sell</a>
          </li>
        </ul>
        <div className="flex mx-14">
          <button className="mx-2 border-2 border-violet-600 py-2 px-6 font-semibold rounded-md text-violet-600">
            LOGIN
          </button>
          <button className="mx-2 border-2 border-violet-600 py-2 px-6 font-semibold rounded-md bg-violet-600 text-white">
            SIGNUP
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
