import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return <div className="nav">
        {/* Link 사용하려면 App.js에서 Navigation이 Router 안에 있어야함 */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to={{
            pathname: "/about",
            state: {
                fromNavigation: true
            }
        }}>About</Link> */}
    </div>
}

export default Navigation;