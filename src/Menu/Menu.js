import React, { useState } from "react";
import "./Menu.css";

function Link(props) {
    return (
        <div
            onClick={() => {
                props.history.push(props.to);
                props.setValue(props.history.location.pathname);
            }}
            className={props.className}
        >
            {props.children}
        </div>
    );
}

function Navbar({ history, value, setValue }) {
    const links = [
        { to: "/", name: "Home" },
        { to: "/experience", name: "Trip Inspiration" },
        { to: "/sources", name: "Sources" },
    ];
    return (
        <div className="MenuNavbar">
            {links.map((link, i) => (
                <Link
                    to={link.to}
                    className={`MenuLinkItem ${
                        value.endsWith(link.to) && "MenuLinkActive"
                    }`}
                    history={history}
                    setValue={setValue}
                    key={i}
                >
                    {link.name}
                </Link>
            ))}
        </div>
    );
}

function Menu({ history }) {
    const [value, setValue] = useState(history.location.pathname);

    return (
        <div className="MenuMain">
            <Link
                to={"/"}
                className="MenuLinkItem"
                history={history}
                setValue={setValue}
            >
                <h1 className="MenuTitle">Rome</h1>
            </Link>
            <Navbar history={history} value={value} setValue={setValue} />
        </div>
    );
}

export default Menu;
