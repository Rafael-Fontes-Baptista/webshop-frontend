import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectProfile } from "../store/user/selectors"
import LogoutButton from "./LogoutButton"
import "./NavBar.css"

export default function NavBar() {
  const linkStyle = {
    margin: "10px",
    textDecoration: "none",
    color: "#fff",
  }

  const userProfile = useSelector(selectProfile)

  return (
    <div className="NavBar">
      <div className="NavBrand">
        <NavLink to="/" style={linkStyle} activeStyle={{ fontWeight: "bold" }}>
          WebSHop 🛍️
        </NavLink>
      </div>
      <div className="MainMenu">
        <NavLink
          to="/"
          style={linkStyle}
          activeStyle={{ fontWeight: "bold" }}
          exact
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={linkStyle}
          activeStyle={{ fontWeight: "bold" }}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={linkStyle}
          activeStyle={{ fontWeight: "bold" }}
        >
          Contact
        </NavLink>
        {userProfile && (
          <NavLink
            to="/about"
            style={linkStyle}
            activeStyle={{ fontWeight: "bold" }}
          >
            About
          </NavLink>
        )}
      </div>
      {!userProfile ? (
        <div className="UserMenu">
          <NavLink
            to="/login"
            style={linkStyle}
            activeStyle={{ fontWeight: "bold" }}
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            style={linkStyle}
            activeStyle={{ fontWeight: "bold" }}
          >
            Sign Up
          </NavLink>
        </div>
      ) : (
        <div className="UserMenu">
          <p>
            Welcome! <strong>{userProfile.name}</strong>{" "}
          </p>
          <LogoutButton />
        </div>
      )}
    </div>
  )
}
