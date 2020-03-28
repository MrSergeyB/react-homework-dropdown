import React, {useState} from "react";
import DropDownList from "../dropdown-list";

const Dropdown = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="dropdown-wrapper open">
      <button className="btn" onClick={() => setShowMenu(!showMenu)}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      {showMenu ? <DropDownList /> : null}
    </div>
  );
};

export default Dropdown;
