import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>copyright&copy; 2020</h4>
        <span>koff75</span> all right reserved
      </div>
    </footer>
  )
}

export default Footer
