import React,{FC} from "react";
import {profileUserDataInterface} from "../../reducers/ProfileReducer"
interface tutorInterface {
  tutor: profileUserDataInterface;
}

const TutorsProfile : FC<tutorInterface>= ({tutor}) => {
  return (
    <div className="Tutors">
      <div className="Tutors__Box">
        <div className="Tutors__Box__Top">
          <div className="Tutors__Box__Top__ProfileImage">
            <img src={tutor.image} className="Tutors__Box__Top__ProfileImage__Image"/>
          </div>
          <div className="Tutors__Box__Top__ProfileData">
            <div className="Tutors__Box__Top__ProfileData__ProfileName">
              <strong>{tutor.username}</strong>
            </div>
            <div className="Tutors__Box__Top__ProfileData__Expertise">
              Physics, chemistry, mathematics
            </div>
            <div className="Tutors__Box__Top__ProfileData__Rating">
              <div className="star-rating1">
                <div className="back-stars">
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>

                  <div className="front-stars1" style={{ width: `${tutor.rating * 20}%` }}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Tutors__Box__Main">
          <p>
            Hi, I'm a Full Stack developer with great experience in building
            top-notch websites, web applications, and mobile apps. I have 4+
            years of development experience building full-stack products from
            scratch, developing and integrating APIs, working with a variety of
            databases and cloud platforms. Hi, I'm a Full Stack developer with
            great experience in building top-notch websites, web applications,
            and mobile apps. I have 4+ years of development experience building
            full-stack products from scratch, developing and integrating APIs,
            working with a variety of databases and cloud platforms
          </p>
        </div>
        <div className="Tutors__Box__Buttons">
          <button className="Tutors__Box__Buttons__Button">
            <h2>Approach</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorsProfile;
