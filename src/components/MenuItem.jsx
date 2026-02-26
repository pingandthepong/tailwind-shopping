import React from "react";
import { CgChevronDownO } from "react-icons/cg";

const MenuItem = ({ children }) => {
  return (
    <li className="flex items-center gap-1 text-xl py-3 after:content-['/'] last:after:content-none after:text-2xl after:font-thin after:ml-2 after:text-gray-500">
      <span className="font-medium">{children}</span>
      <CgChevronDownO className="text-3xl" />
    </li>
  );
};

export default MenuItem;
