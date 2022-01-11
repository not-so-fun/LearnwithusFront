import React, {FC} from 'react';

import { AiFillStar } from "react-icons/ai";

const ProfileImageAndData :FC = () => {
    
    return (
        <div className="Profile__Box__Top__ImagesAndDatas">
            <div className="Profile__Box__Top__ImagesAndDatas__Image">

            </div>
            <div className="Profile__Box__Top__ImagesAndDatas__ProfileName">
                sherpasang123
            </div>
            <div className="Profile__Box__Top__ImagesAndDatas__Rating">
            <AiFillStar className="Profile__Box__Top__ImagesAndDatas__Rating__Star"/> 
            <AiFillStar className="Profile__Box__Top__ImagesAndDatas__Rating__Star"/> 
            <AiFillStar className="Profile__Box__Top__ImagesAndDatas__Rating__Star"/> 
            <AiFillStar className="Profile__Box__Top__ImagesAndDatas__Rating__Star"/> 
            <AiFillStar className="Profile__Box__Top__ImagesAndDatas__Rating__Star"/> 
            </div>
            
        </div>
    )
}

export default ProfileImageAndData;
