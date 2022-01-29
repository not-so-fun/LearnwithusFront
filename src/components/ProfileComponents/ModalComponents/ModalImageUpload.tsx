import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";

const ModalImageUpload = () => {
  return (<>
  <div className="CENTER"> 
  </div>
  <div className="Modal">
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
