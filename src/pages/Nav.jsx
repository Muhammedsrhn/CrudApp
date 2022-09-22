import React from 'react'
import { Link } from "react-router-dom";
import "../css/style.css";

function Nav() {
    return (
        <div className="navbar">
            <ul>
                <Link to={"/"}>
                    <li>Contact List</li>
                </Link>
                <Link to={"/addContact"}>
                    <li>Add Contact</li>
                </Link>
            </ul>

        </div>
    )
}


export default Nav;