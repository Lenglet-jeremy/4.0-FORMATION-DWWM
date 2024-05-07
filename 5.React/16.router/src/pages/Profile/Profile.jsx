import React from "react";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";

export default function Profile() {
  let name = useOutletContext();
  return (
    <div>
      <ul className="d-flex p-20">
        <NavLink end to="">
          View
        </NavLink>
        <NavLink to="data?age=22&name=John">Data</NavLink>
      </ul>
      <div>
        <h2>Profile</h2>
        <Outlet context={name} />
      </div>
    </div>
  );
}
