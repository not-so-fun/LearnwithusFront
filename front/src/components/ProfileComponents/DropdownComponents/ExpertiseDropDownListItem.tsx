import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CheckBox from "@mui/material/Checkbox";
import { EXPERTISE_EDIT_TEMP } from "../../../constants/ExpertiseEditConstants";

interface dataType {
  title: string;
  user_id: string | null;
  disabled: boolean;
  topic_id: string;
}

const ExpertiseDropDownListItem: React.FC<dataType> = ({
  title,
  user_id,
  disabled,
  topic_id,
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user_id == null) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [user_id]);

  const handleCheckBoxChange = () => {
    if (checked === false) {
      dispatch({
        type: EXPERTISE_EDIT_TEMP,
        expertise: { topic_id: topic_id, nature: "add" },
      });
    } else {
      dispatch({
        type: EXPERTISE_EDIT_TEMP,
        expertise: { topic_id: topic_id, nature: "remove" },
      });
    }

    setChecked(!checked);
  };

  return (
    <div className="modal__selects__dropdown__item">
      <CheckBox
        disabled={disabled}
        checked={checked}
        color="success"
        sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
        onChange={handleCheckBoxChange}
      />
      <p className="modal__selects__dropdown__item__text">{title}</p>
    </div>
  );
};

export default ExpertiseDropDownListItem;
