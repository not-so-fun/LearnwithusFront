import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RateUserUI from "./RatingUI";

import { profileUserDataInterface } from "../../reducers/ProfileReducer";
import { rateUserAction } from "../../actions/ProfileAction";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../stores";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface ProfileFormInterface {
  profile_data: profileUserDataInterface;
}
const RateUserModal: React.FC<ProfileFormInterface> = ({ profile_data }) => {
  const [open, setOpen] = React.useState(false);
  const { user_id, token } = useTokenAndId();
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rate, setRate] = React.useState<number>(0);
  const { rating } = useSelector<RootStateType>(
    (state) => state.profile_info_data
  ) as { rating: boolean };

  const rateApi: React.FormEventHandler<HTMLButtonElement> = (event) => {
    dispatch(rateUserAction(rate, profile_data.user_id, token));
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      {user_id === profile_data.user_id ? (
        <RateUserUI profile_data={profile_data} />
      ) : (
        <div onClick={handleOpen}>
          <RateUserUI profile_data={profile_data} />
        </div>
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <div className="star-rating">
                <div className="back-stars">
                  <i
                    className="fa fa-star-o"
                    aria-hidden="true"
                    onClick={() => setRate(1)}
                  ></i>
                  <i
                    className="fa fa-star-o"
                    aria-hidden="true"
                    onClick={() => setRate(2)}
                  ></i>
                  <i
                    className="fa fa-star-o"
                    aria-hidden="true"
                    onClick={() => setRate(3)}
                  ></i>
                  <i
                    className="fa fa-star-o"
                    aria-hidden="true"
                    onClick={() => setRate(4)}
                  ></i>
                  <i
                    className="fa fa-star-o"
                    aria-hidden="true"
                    onClick={() => setRate(5)}
                  ></i>

                  <div
                    className="front-stars"
                    style={{ width: `${rate * 20}%` }}
                  >
                    <i
                      className="fa fa-star"
                      aria-hidden="true"
                      onClick={() => setRate(1)}
                    ></i>
                    <i
                      className="fa fa-star"
                      aria-hidden="true"
                      onClick={() => setRate(2)}
                    ></i>
                    <i
                      className="fa fa-star"
                      aria-hidden="true"
                      onClick={() => setRate(3)}
                    ></i>
                    <i
                      className="fa fa-star"
                      aria-hidden="true"
                      onClick={() => setRate(4)}
                    ></i>
                    <i
                      className="fa fa-star"
                      aria-hidden="true"
                      onClick={() => setRate(5)}
                    ></i>
                  </div>
                </div>
              </div>
            </Typography>
            <Button onClick={rateApi}>Rate</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default RateUserModal;
