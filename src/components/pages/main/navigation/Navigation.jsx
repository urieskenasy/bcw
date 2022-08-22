import React from "react";
import "./navigation_style.scss";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navigation">
            <ul className="navigation-ul">
                <li className="navigation-ul-li">
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                </li>
                <li className="navigation-ul-li">
                    <NavLink className="nav-link" to="/TeamAndValues">
                        Team & Values
                    </NavLink>
                </li>
                <li className="navigation-ul-li">
                    <NavLink className="nav-link" to="/NftAndTokens">
                        Tokens & NFT's
                    </NavLink>
                </li>
                <li className="navigation-ul-li">
                    <NavLink className="nav-link" to="/Partners">
                        Partners
                    </NavLink>
                </li>
                <li className="navigation-ul-li">
                    <NavLink className="nav-link" to="/MindMap">
                        Mind Map
                    </NavLink>
                </li>
                <li className="navigation-ul-li">
                    <NavLink className="nav-link" to="/WaitList">
                        WaitList
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
