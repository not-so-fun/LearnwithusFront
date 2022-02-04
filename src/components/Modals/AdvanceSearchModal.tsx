import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import { Progress } from "../ReusableUIComponents/Spinner";
import Button from "@mui/material/Button";

type ShowState = {
  show: boolean;
};
type PropState = {
  modalHandler: () => void;
};
type ClickProp = {
  onClick: () => void;
};

const Backdrop: React.FC<ClickProp> = ({ onClick }) => {
  return <div className="backdrop" onClick={onClick} />;
};

const ModalOverlay: React.FC<ClickProp> = ({ onClick }) => {
  return (
    <div className="SearchModal">
      <div className="SearchModal__Top">
        <p className="SearchModal__Top__Para">Advanced Search</p>
        <CloseIcon className="SearchModal__close" onClick={onClick} />
      </div>
      <div className="SearchModal__Search">
        <div className="SearchModal__Search__Expertise">
          <label htmlFor="expertise">Expertise</label>
          <select name="expertise" id="expertise">
            <option value="art">Art</option>
            <option value="biology">Biology</option>
            <option value="chemistry">Chemistry</option>
            <option value="literature">Literature</option>
            <option value="philosophy">Philosophy</option>
            <option value="physics">Physics</option>
          </select>
        </div>
      </div>
      <div className="SearchModal__Search">
        <div className="SearchModal__Search__Expertise">
          <label htmlFor="rating">Rating</label>
          <Box sx={{ width: 680 }}>
            <Slider
              getAriaLabel={() => "Temperature range"}
              valueLabelDisplay="auto"
            />
          </Box>
        </div>
      </div>
      <div className="SearchModal__Button">
        <button className="SearchModal__Button__Btn margin-right">
          Confirm
        </button>
        <button className="SearchModal__Button__BtnCancel" onClick={onClick}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const AdvanceSearchModal: React.FC<PropState> = ({ modalHandler }) => {
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop onClick={modalHandler} />,
        document.getElementById("backdrop-root")!
      )}
      {createPortal(
        <ModalOverlay onClick={modalHandler} />,
        document.getElementById("overlay-root")!
      )}
    </React.Fragment>
  );
};

export default AdvanceSearchModal;

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";

// function valuetext(value) {
//   return `${value}°C`;
// }

// export default function RangeSlider() {
//   const [value, setValue] = React.useState([20, 37]);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: 300 }}>
//       <Slider
//         getAriaLabel={() => "Temperature range"}
//         value={value}
//         onChange={handleChange}
//         valueLabelDisplay="auto"
//         getAriaValueText={valuetext}
//       />
//     </Box>
//   );
// }
