import React from "react";
import "./Story.css";

function Story({ src, alt, title, children }) {
    return (
        <div className="ExperienceStoryMain">
            <h1>{title}</h1>
            <img src={src} alt={alt} className="ExperienceStoryImage" />
            <p className="ExperienceStoryStory">{children}</p>
        </div>
    );
}

export default Story;
