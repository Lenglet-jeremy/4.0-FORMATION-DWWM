import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

export default function Details() {
  const params = useParams();
  // console.log(params);
  return (
    <div>
      <ul className="d-flex p-20">
        <NavLink end to="">
          Articles
        </NavLink>
        <NavLink to="photos">Photos</NavLink>
      </ul>
      <div>
        <h2>Details {params.id} </h2>
        <Outlet />
      </div>
    </div>
  );
}
