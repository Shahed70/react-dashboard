import React from "react";
import { FaHome, FaRadiation, FaTable } from "react-icons/fa";

export const sideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome />,
    cName: "nav-taxt",
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaRadiation />,
    cName: "nav-taxt",
    submenu: [
      {
        title: "sub-1",
        path: "/sub1",
        icon: <FaRadiation />,
        cName: "sub-taxt",
      },
    ],
  },

  {
    title: "About",
    path: "/about",
    icon: <FaTable />,
    cName: "nav-taxt",
  },
];
