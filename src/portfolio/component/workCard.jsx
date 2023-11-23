import "./workCardStyle.css";
import React from 'react';
import moka from "../assets/moka.jpeg";
import aren from "../assets/aren.jpeg";
import { NavLink } from "react-bootstrap";

const WorkCardComponent = () => {
  return (
    <div className="work-container">
        <h1 className="product-heading">product</h1>
        <div className="product-container">
            <div className="prduct-card">
                <img src={moka} alt="" />
                <h2 className="product-title">Product Title</h2>
                <div className="pro-details">
                    <p>ini paragraf</p>
                    <div className="pro-btn">
                        <NavLink to="url.com" className="btn">View</NavLink>
                    </div>
                    <div className="pro-btn">
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCardComponent;