import React from "react";
import { ReactPropTypes } from "react";
import { RouteChildrenProps } from "react-router-dom";

interface dataType {
  title: string;
  user_id: string | null;
}

const handleCheckBoxChange = () => {};

const WishesDropDownListItem: React.FC<dataType> = ({ title, user_id }) => {
  return (
    <div className="modal__selects__dropdown__item">
      <input
        type="checkbox"
        className="modal__selects__dropdown__item__checkbox"
        checked={user_id == null ? false : true}
        onChange={handleCheckBoxChange}
      />{" "}
      <p className="modal__selects__dropdown__item__text">{title}</p>
    </div>
  );
};

export default WishesDropDownListItem;
