import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AdvanceSearchModal from "../Modals/AdvanceSearchModal";
import TutorsProfile from "../tutors/tutorsProfile";
import { SearchByNameAction } from "../../actions/searchUserAction";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../../stores";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { profileUserDataInterface } from "../../reducers/ProfileReducer";
import { searchTutorInterface } from "../../reducers/searchTutorsReducer";
const SearchTutors = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const dispatch = useDispatch();
  const { token } = useTokenAndId();
  const handleModal = () => {
    setShowModal((prev) => !prev);
  };
  const handleSubmit = () => {
    dispatch(SearchByNameAction(token, username));
  };
  const { loading, tutors, error } = useSelector<RootStateType>(
    (state) => state.tutor
  ) as searchTutorInterface;
  return (
    <div className="SearchTutors">
      <div className="SearchTutors__Top">
        <div className="SearchTutors__Top__Search">
          <input
            type="search"
            placeholder="Search for tutors"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <SearchIcon
            className="SearchTutors__Top__Search__Icon"
            onClick={handleSubmit}
          />
        </div>
        <p className="SearchTutors__Top__AdvanceSearch" onClick={handleModal}>
          <strong>Advance Search</strong>
        </p>
      </div>
      {showModal && <AdvanceSearchModal modalHandler={handleModal} />}
      {tutors &&
        tutors.map((tutor: profileUserDataInterface) => (
          <TutorsProfile tutor={tutor} key={tutor.user_id} />
        ))}
    </div>
  );
};

export default SearchTutors;
