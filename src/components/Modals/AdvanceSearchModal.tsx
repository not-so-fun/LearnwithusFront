import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { TopicAction } from "../../actions/TopicAction";
import { topicInterface } from "../../reducers/TopicReducer";
import { RootStateType } from "../../stores";
import {
  SearchByRatingAction,
  SearchByExpertiseAction,
  SearchAction
} from "../../actions/searchUserAction";


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
  const [expertise_id, setExpertise_id] = useState<string|null>(null)
  const dispatch = useDispatch();
 
  const { token } = useTokenAndId();
  useEffect(() => {
    dispatch(TopicAction(token));
  }, [token]);
  const {
    loading: topicLoading,
    topics,
    error: topicError,
  } = useSelector<RootStateType>((state) => state.topics) as topicInterface;
  function valuetext(value: number) {
    return `${value}°C`;
  }
  
  const minDistance = 1;
  const [value, setValue] = React.useState<number[]>([0, 5]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };
  const handleSelectExpertise= (e: React.ChangeEvent<HTMLSelectElement>) => {
    setExpertise_id(e.target.value);  
  };
  const onSubmit: React.FormEventHandler<HTMLButtonElement> = () =>{
    if(value[0] === 0 && value[1] === 5 && expertise_id !==null){
      console.log("Inside Expertise action");
      dispatch(SearchByExpertiseAction(token,expertise_id));
      onClick();
    }
    if((value[0] > 0 || value[1] < 5) && expertise_id ===null){
      console.log("Inside rating action");
      
      let lowerRating = value[0];
      let higherRating = value[1];
      console.log(lowerRating);
      console.log(higherRating);
      dispatch(SearchByRatingAction(token,
        lowerRating,higherRating));
        onClick();

    }
    if((value[0] > 0 || value[1] < 5) && expertise_id != null){
      console.log("Inside advanced action");
      console.log(expertise_id);
      let lowerRating = value[0];
      let higherRating = value[1];
      dispatch(SearchAction(token,expertise_id,
        lowerRating,higherRating ));
        onClick();
    }
    
    if(value[0] === 0 && value[1] === 5 && expertise_id ===null){
      console.log("inside nothing action");
        onClick();
    }
  }
  return (
    <div className="SearchModal">
      <div className="SearchModal__Top">
        <p className="SearchModal__Top__Para">
          <strong>Advanced Search</strong>
          </p>
        <CloseIcon className="SearchModal__close" onClick={onClick} />
      </div>
      <div className="SearchModal__Search">
        <div className="SearchModal__Search__Expertise">
          <label htmlFor="expertise" className="SearchModal__Search__Expertise__TitleLabel">
            <strong>Expertise</strong></label>
          <select 
          name="expertise" 
          onChange={(e) => handleSelectExpertise(e)}
          className="SearchModal__Search__Expertise__TitleLabel__Select"
          id="expertise">
          <option value="" selected>
          Topic
        </option>
        {topics &&
          topics.map((topic: { topic_id: string; title: string }) => (
            <option
              key={topic.topic_id}
              value={topic.topic_id}
              className="SearchModal__Search__Expertise__TitleLabel__Select__Option"
            >
              {topic.title}
            </option>
          ))}
          </select>
        </div>
      </div>
      <div className="SearchModal__Search">
        <div className="SearchModal__Search__Expertise">
          <label className="SearchModal__Search__Expertise__TitleLabel" htmlFor="rating">
            <strong>Rating</strong> 
          </label>
          <Box className="SearchModal__Search__Expertise__Box" >
            <Slider
              getAriaLabel={() => "Minimum distance"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="on"
              getAriaValueText={valuetext}
              disableSwap
              step={1}
              min={0}
              max={5}
            />
          </Box>
        </div>
      </div>
      <div className="SearchModal__Button">
        <button className="SearchModal__Button__Btn margin-right" onClick={onSubmit}>
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

