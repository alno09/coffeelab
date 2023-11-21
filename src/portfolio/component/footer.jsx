import "./footerStyle.css";
import React from "react";
import {FaHome, FaPhone, FaMailBulk, FaInstagram, FaWhatsapp} from "react-icons/fa"

const FooterComponent = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                        <div>
                            <p>B4B1 Kost Hijau</p>
                            <p>DIY</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />
                        1-1234-549-09</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />
                        wensko@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About us</h4>
                    <p>Housing in a boarding house with so many potential to be a good meeting point.</p>
                    <div className="social">
                        <FaInstagram size={20} style={{color:"#fff", marginRight: "1rem"}} />
                        <FaWhatsapp size={20} style={{color:"#fff", marginRight: "1rem"}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent;