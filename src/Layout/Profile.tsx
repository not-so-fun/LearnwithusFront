import React , {FC} from 'react';
import ProfileImageAndData from '../components/ProfileComponents/ProfileImageAndData';
import ProfileForm from '../components/ProfileComponents/ProfileForm';

const Profile: FC = () => {
    
    return (
        <div className="Profile">
            <div className="Profile__Box">
                <div className="Profile__Box__Top">
                    <ProfileImageAndData/>
                    <ProfileForm/>
                    
                </div>
                <div className="Profile__Box__Main">
                    <div className="Profile__Box__Main__Newsfeed" >

                    </div>
                    <div className="Profile__Box__Main__SideInformation">
                        
                    </div>

                </div>
            </div>
            
            
        </div>
    )
}

export default Profile;
