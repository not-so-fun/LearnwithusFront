import React, { FC } from 'react';
import BeatLoader from "react-spinners/BeatLoader";

interface modalImageUploadInterface{
  imageUploadPercent:number
}
const ModalImageUpload:FC = () => {
  return (<>
  <div className="CENTER"> 
  </div>
  <div style={{zIndex:10000}} className="Modal">
    <div className="Modal__Spinner">
    <BeatLoader size={50}/>

    </div>
    <div className="Modal__Text">
      <h1>
        Please wait when image is uploading
      </h1>
    </div>
      
    </div>
    </>);
};

export default ModalImageUpload;