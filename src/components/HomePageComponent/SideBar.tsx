import React, { FC } from "react";
import { Avatar } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

// const SideBar: FC = () => {
//   const history=useHistory()
//   return (
//     <div className="HomePage__Left__SideBar">
//       <div className="HomePage__Left__SideBar__Header">
//         <p onClick={()=>history.push("/")}>LEARN101</p>
//       </div>
//       <div className="HomePage__Left__SideBar__Links">
//         <div className="HomePage__Left__SideBar__Links__Link">Samikxya</div>
//         <Link to="/answered" className="HomePage__Left__SideBar__Links__Link">
//           Answered Questions
//         </Link>
//         <div className="HomePage__Left__SideBar__Links__Link">
//           Replied Questions
//         </div>
//         <div className="HomePage__Left__SideBar__Links__Link">
//           Search Tutors
//         </div>
//       </div>
//     </div>
//   );
// };
const SideBar: FC = () => {
  const history = useHistory();
  return (
    <div className="App__Bottom__Left__SideBar">
      <div className="App__Bottom__Left__SideBar__Header">
        <p onClick={() => history.push("/")}>LEARN101</p>
      </div>
      <div className="App__Bottom__Left__SideBar__Links">
        <div className="App__Bottom__Left__SideBar__Links__Link">Samikxya</div>
        <Link
          to="/answered"
          className="App__Bottom__Left__SideBar__Links__Link"
        >
          Answered Questions
        </Link>
        <div className="App__Bottom__Left__SideBar__Links__Link">
          Replied Questions
        </div>
        <div className="App__Bottom__Left__SideBar__Links__Link">
          Search Tutors
        </div>
      </div>
    </div>
  );
};

export default SideBar;
