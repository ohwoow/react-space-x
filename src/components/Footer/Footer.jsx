import React from "react";
import logo from '../../logo.svg'
import './footer.css'

const Footer = ({links}) => {
  console.log(links)
  return (
    <footer className="footer">
      <img src={logo} alt="logo Space X" className="logo"/>
      <nav className="footer-nav">
        <ul className="list">
          <li className="item"><a href={links.elon_twitter} className="item-link" target='_blank'>Elon Musk Twitter</a></li>
          <li className="item"><a href={links.twitter} className="item-link" target='_blank'>Twitter</a></li>
          <li className="item"><a href={links.flickr} className="item-link" target='_blank'>Flickr</a></li>
          <li className="item"><a href={links.website} className="item-link" target='_blank'>Website</a></li>
        </ul>
      </nav>
      <p className="footer-text">
        For additional questions, contact
        <a className="footer-link" href="mailto:rideshare@spacex.com"
        >rideshare@spacex.com</a
        >
      </p>
    </footer>
  )
}

export default Footer