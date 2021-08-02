import React from "react";
import { CardContainer, User, UserInfo } from "./index.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faMapMarkerAlt,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";

const UserCard = () => {
  return (
    <CardContainer>
      <User>
        <div className="avatar">
          <img src="/img/avatar-user.png" alt="avatar" />
        </div>
        <div className="username">
          <div className="name"> Kyle Samarino </div>
          <div className="tagname">
            <h4> @kylesamarino </h4>
            <small>Front-end Developer</small>
          </div>
        </div>
      </User>
      <UserInfo>
        <div className="container">
          <FontAwesomeIcon className="ico" icon={faMapMarkerAlt} />
          <p>Rio Branco/Acre - Brasil</p>
        </div>
        <div className="container">
          <FontAwesomeIcon className="ico" icon={faBuilding} />
          <p>InCicle</p>
          <FontAwesomeIcon className="ico" icon={faSchool} />
          <p>Uninort</p>
        </div>
      </UserInfo>
    </CardContainer>
  );
};

export default UserCard;
