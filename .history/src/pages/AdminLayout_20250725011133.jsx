import React from "react";
import { NavLink } from "react-router-dom";
import { HorseIcon, CheckerboardIcon } from "@phosphor-icons/react";
import { adminLinks } from "../utils";
const AdminLayout = () => {
  return (
    <main className="bg-base-400">
      x
      <nav className="fixed text-white w-64 gap-10 flex flex-col left-0 top-0 bottom-0 py-10 px-4 bg-primary">
        <div className="flex flex-col">
          <img />
          <p className="font-semibold text-lg text-center">AFProTrack</p>
        </div>

        <div className="flex flex-col text-md gap-2">
          {adminLinks.map((link) => {
            return (
              <NavLink
                to={link.path}
                className="flex py-2 px-3 rounded-md items-center gap-2 hover:bg-gray-500/20 transition-all duration-200"
              >
                {link.icon}
                <p>{link.name}</p>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </main>
  );
};

export default AdminLayout;
