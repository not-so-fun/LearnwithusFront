import React, { FC, useState } from "react";
import ExpertiseModal from "./ExpertiseModal";
import WishesModal from "./WishesModal";

export type ModalState = {
  open: boolean;
  wishes: boolean;
};
interface ProfileStatsInterface{
  page_user_id:string
}
const ProfileStats: FC<ProfileStatsInterface> = ({page_user_id}) => {
  //state type

  const [openModal, setOpenModal] = useState<ModalState>({
    open: false,
    wishes: false,
  });

  const modalHandler = () => {
    setOpenModal({ ...openModal, open: !openModal.open });
  };
  const wishHandler = () => {
    setOpenModal({ ...openModal, wishes: !openModal.wishes });
  };

  return (
    <div className="Profile__Box__Top__Statistics">
      <div className="Profile__Box__Top__Statistics__Div">
        <div className="Profile__Box__Top__Statistics__Div__Data">
          <p>Number of questions asked</p>
          <h1>78</h1>
        </div>
        <div className="Profile__Box__Top__Statistics__Div__Data">
          <p>Number of questions answered</p>
          <h1>1200</h1>
        </div>
      </div>

      <div className="Profile__Box__Top__Statistics__Botton">
        <button
          className="Profile__Box__Top__Statistics__Botton__Expertise"
          onClick={() => {
            setOpenModal({ ...openModal, open: !openModal.open });
          }}
        >
          Expertise
        </button>

        {openModal.open && (
          <ExpertiseModal modalHandler={modalHandler} heading="Expertise" />
        )}

        <button
          className="Profile__Box__Top__Statistics__Botton__Wishes"
          onClick={() => {
            setOpenModal({ ...openModal, wishes: !openModal.wishes });
          }}
        >
          Wishes
        </button>

        {openModal.wishes && (
          <WishesModal page_user_id={page_user_id} modalHandler={wishHandler} heading="Wishes" />
        )}
      </div>
    </div>
  );
};

export default ProfileStats;
