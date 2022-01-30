import React from "react";
import gmailIcon from "./social_icons/gmail-icon.svg";
import facebookIcon from "./social_icons/facebook-icon.svg";
import githubIcon from "./social_icons/github-icon.svg";

export default function Social() {
    return (
        <div class="social">
            <a href="mailto:dear.shorifulislam@gmail.com"><img src={gmailIcon} className="logoIcon" alt="Logo"/></a>
            <a href="https://web.facebook.com/Sh0riful.Islam/"><img src={facebookIcon} className="logoIcon" alt="Logo"/></a>
            <a href="https://github.com/MeSagor"><img src={githubIcon} className="logoIcon" alt="Logo"/></a>
        </div>
    )
}