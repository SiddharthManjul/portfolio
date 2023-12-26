import React from "react";
import twitterIcon from "../images/twitterIcon.png";
import linkedinIcon from "../images/linkedinIcon.png";
import instagramIcon from "../images/instagramIcon.png";
import discordIcon from "../images/discordIcon.svg";

const Footer = () => {
    return (
        <>
            <div className="w-full h-24" color="grey">
                <div className="flex flex-row gap-x-4">
                    <img className="w-8 h-8 bg-white rounded-lg" src={twitterIcon} alt="Twitter"></img>
                    <img className="w-8 h-8 rounded-lg" src={linkedinIcon} alt="Linkedin"></img>
                    <img className="w-8 h-8 rounded-lg" src={instagramIcon} alt="Instagram"></img>
                    <img className="w-8 h-8 rounded-lg" src={discordIcon} alt="Discord"></img>
                </div>
            </div>
        </>
    )
}

export default Footer;