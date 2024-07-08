import React from "react"
import avatar from "../images/Avatar.png"
import emailIcon from "../images/Email Icon.png"
import linkedinIcon from "../images/Linkedin Icon.png"

export default function Info() {
  return (
    <div>
      <img src={avatar} alt="avatar" className="avatar-image" />
      <div className="infos">
        <h2 className="name">DevOnRoad</h2>
        <p className="role">Frontend Developer</p>
        <p className="website">devonroad.website</p>
      </div>
      <div className="buttons-div">
        <button type="button" className="email-button buttons">
          <img src={emailIcon} alt="Email icon" className="email-icon buttons-icons"/>
          <p>Email</p>
        </button>
        <button type="button" className="linkedin-button buttons">
          <img src={linkedinIcon} alt="Linkedin icon" className="linkedin-icon buttons-icons"/>
          <p>Linkedin</p>
        </button>
      </div>
    </div>
  );
}