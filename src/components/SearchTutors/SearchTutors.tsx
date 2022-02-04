import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AdvanceSearchModal from "../Modals/AdvanceSearchModal";
const SearchTutors = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className="SearchTutors">
      <div className="SearchTutors__Top">
        <div className="SearchTutors__Top__Search">
          <input type="search" />
          <SearchIcon className="SearchTutors__Top__Search__Icon" />
        </div>
        <p className="SearchTutors__Top__AdvanceSearch" onClick={handleModal}>
          Advance Search
        </p>
      </div>
      {showModal && <AdvanceSearchModal modalHandler={handleModal} />}
    </div>
  );
};

export default SearchTutors;
