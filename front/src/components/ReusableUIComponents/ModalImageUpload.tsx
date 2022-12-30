import React, { FC } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { BeatLoaderProgress } from "./BeatLoader";

interface modalImageUploadInterface {
  imageUploadPercent: number;
}
const ModalImageUpload: FC = () => {
  return (
    <>
      <div style={{ zIndex: 10000 }} className="CENTER"></div>
      <div style={{ zIndex: 10000 }} className="Modal">
        <div className="Modal__Spinner">
          <BeatLoaderProgress size={30} color="#048004" />
        </div>
        <div className="Modal__Text">
          <h1>Please, Image Uploading...</h1>
        </div>
      </div>
    </>
  );
};

export default ModalImageUpload;
