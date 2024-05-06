import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <ul className="d-flex p-20">
        <NavLink end to="">
          View
        </NavLink>
        <NavLink to="data">Data</NavLink>
      </ul>
      <div>
        <h2>Profile</h2>
        <Outlet />
      </div>
    </div>
  );
}
