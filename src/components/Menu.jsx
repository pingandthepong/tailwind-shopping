import React from "react";
import MenuItem from "./MenuItem.jsx";

const Menu = () => {
  return (
    <div>
      <ul className="flex items-center gap-4">
        <MenuItem>여성의류</MenuItem>
        <MenuItem>상의</MenuItem>
        <MenuItem>반소매 티셔츠</MenuItem>
      </ul>
    </div>
  );
};

export default Menu;
