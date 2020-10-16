import React from "react";
import logo from '../../logo.svg'
import './header.css'

const Header = (props) => (
  <header className="header">
    <img
      src={logo}
      alt="Logo Space X"
      className="logo"
    />
    <nav className="main-nav nav">
      <ul className="list">
        {props.rockets.map((rocket, i) => (
          <li key={i} className="item">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault()
                props.changeRocket(rocket)
              }}
              className="item-link">{rocket}</a>
          </li>
        ))}
      </ul>
    </nav>
    <nav className="secondary-nav">
      <ul className="list">
        <li className="item">
          <a href="/" className="item-link">Home</a>
        </li>
        <li className="item">
          <a href="/" className="item-link">Calendar</a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header