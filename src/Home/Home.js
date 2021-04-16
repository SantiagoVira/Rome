import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import Rome from "./images/Rome.png";

function Home() {
    return (
        <div className="HomeRomeWrapper">
            <img className="HomeRomeImage" src={Rome} alt="Rome" />
            <h1 className="HomeRomeText">Rome is Home</h1>
            <h1>
                Check out our{" "}
                <Link to="/experience" className="HomeLearnLink">
                    Trip Inspiration Page
                </Link>{" "}
                to learn why Rome is for you
            </h1>
            <h3>
                There, you'll find stories about our great accomplishments such
                as our Aqueducts or our Architecture
            </h3>
            <h1>
                Wish to learn more facts about our history? Check out{" "}
                <Link to="/sources" className="HomeLearnLink">
                    Our Sources Page
                </Link>{" "}
            </h1>
            <h3>
                There you can find some great links for additional research as
                well as sources for all the information we used!
            </h3>
        </div>
    );
}

export default Home;
