import "./heroImgStyle.css";
import React from "react";
import bg from "../assets/bg-2.jpg";
import { Link } from "react-router-dom";

const HeroImgComponent = () => {
    return(
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={bg} alt="" />
            </div>
            <div className="content">
                <p>WELCOME TO OUR LAB</p>
                <h1>WENS KOFFIE</h1>
                <div>
                    <Link to="/product" className="btn">Product</Link>
                    <Link to="/contact" className="btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImgComponent;