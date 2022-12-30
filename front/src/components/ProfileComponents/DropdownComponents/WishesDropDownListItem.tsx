import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import CheckBox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../../stores";
import { WISHES_EDIT_TEMP } from "../../../constants/WishesEditConstants";

interface dataType {
  title: string;
  user_id: string | null;
  disabled: boolean;
  topic_id: string;
}

const WishesDropDownListItem: React.FC<dataType> = ({
  title,
  user_id,
  disabled,
  topic_id

}) => {
  const [checked, setChecked] = useState<boolean>(false);
  // const {loading,wishes}=useSelector<RootStateType>(state=>state.edit_wishes)
  const dispatch = useDispatch();

  useEffect(() => {
    if (user_id == null) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [user_id]);

  const handleCheckBoxChange:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined = () => {
    if (checked === false) {
      dispatch({
        type: WISHES_EDIT_TEMP,
        wish: { topic_id: topic_id, nature: "add" },
      });
    }else{
      dispatch({
        type: WISHES_EDIT_TEMP,
        wish: {topic_id:topic_id,  nature: "remove" },
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

export default WishesDropDownListItem;
