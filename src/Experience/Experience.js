import React from "react";
import "./Experience.css";
import Story from "./Story/Story";

import Pantheon from "../images/pantheon.jpg";
import Aqueduct from "../images/aqueduct.jpg";

function Experience() {
    return (
        <div className="ExperiencePageMain">
            <Story title="Public Works" src={Aqueduct} alt="Roman Aqueduct">
                Hello
            </Story>
            <Story
                title="Art and Architecture"
                src={Pantheon}
                alt="Roman Pantheon"
            >
                Hello
            </Story>
        </div>
    );
}

export default Experience;
