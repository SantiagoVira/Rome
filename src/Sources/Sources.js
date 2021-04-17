import React from "react";
import "./Sources.css";

function Title(props) {
    return (
        <div className="SourcesTitleWrapper">
            <h1 className="SourcesTitleText">{props.children}</h1>
        </div>
    );
}

function Links({ links }) {
    return (
        <ul>
            {links.map((pair) => {
                const link = pair[0];
                const title = pair[1];

                return (
                    <li>
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="SourcesLinks"
                        >
                            {title}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

function Sources() {
    return (
        <div className="SourcesMainWrapper">
            <div>
                {" "}
                <Title>Our Sources</Title>{" "}
                <Links
                    links={[
                        [
                            "https://www.nationalgeographic.org/encyclopedia/roman-aqueducts/",
                            "National Geographic - Roman Aqueducts",
                        ],
                        [
                            "https://www.worldhistory.org/Roman_Architecture/",
                            "World History Encyclopedia - Roman Architecture",
                        ],
                    ]}
                />
            </div>
            <div>
                {" "}
                <Title>Additional Research</Title>{" "}
                <Links
                    links={[
                        [
                            "https://www.nationalgeographic.org/topics/resource-library-ancient-rome/?q=&page=1&per_page=25",
                            "National Geographic",
                        ],
                        [
                            "https://www.britannica.com/place/ancient-Rome",
                            "Britannica",
                        ],
                        [
                            "https://www.history.com/topics/ancient-rome/ancient-rome",
                            "History",
                        ],
                        [
                            "https://www.worldhistory.org/Rome/",
                            "World History Encyclopedia",
                        ],
                    ]}
                />
            </div>
        </div>
    );
}

export default Sources;
