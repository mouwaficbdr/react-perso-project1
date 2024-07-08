import React from "react"
import facebookIcon from '../images/Facebook Icon.png'
import githubIcon from '../images/GitHub Icon.png'
import instagramIcon from '../images/Instagram Icon.png'
import twitterIcon from '../images/Twitter Icon.png'


export default function Footer() {
  return (
    <div className="footer">
      <img src={facebookIcon} alt="Facebook" className="footer-icons" />
      <img src={githubIcon} alt="GitHub" className="footer-icons" />
      <img src={instagramIcon} alt="Instagram" className="footer-icons" />
      <img src={twitterIcon} alt="Twitter" className="footer-icons" />
    </div>
  );
}