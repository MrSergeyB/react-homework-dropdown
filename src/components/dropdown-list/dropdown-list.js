import React, {useState} from "react";
import DropDownItem from "../dropdown-item/";

const DropDownlist = () => {
  const [active, setActive] = useState("Profile information");

  const menuItems = [
    "Profile information",
    "Change Password",
    "Become PRO",
    "Log Out"
  ];

  const activeOnClick = e => {
    setActive(e);
  };

  return (
    <ul className="dropdown">
      {menuItems.map((i, id) => {
        return (
          <DropDownItem
            active={active}
            key={id}
            item={i}
            activeOnClick={activeOnClick}
          />
        );
      })}
    </ul>
  );
};

export default DropDownlist;
