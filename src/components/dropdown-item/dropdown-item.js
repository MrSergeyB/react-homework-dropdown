import React from "react";
import "./dropdown-item.css";
import PropTypes from "prop-types";

const DropdownItem = props => {
  const {item, activeOnClick, active} = props;

  return (
    <li>
      <a
        href="!#"
        onClick={e => activeOnClick(e.target.text)}
        className={item === active ? "active" : ""}
      >
        {item}
      </a>
    </li>
  );
};
DropdownItem.propTypes = {
  item: PropTypes.string,
  activeOnClick: PropTypes.func,
  active: PropTypes.string
};

export default DropdownItem;
