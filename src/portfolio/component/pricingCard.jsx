import React from "react";
import "./pricingCardStyle.css";
import { Link } from "react-router-dom";

const PricingCardComponent = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Coffee -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 3 days -</p>
                <Link to="/contact" className="btn">
                    ADD TO CHART
                </Link>
            </div>

            <div className="card">
                <h3>- Tea -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 3 days -</p>
                <Link to="/contact" className="btn">
                    ADD TO CHART
                </Link>
            </div>
            
            <div className="card">
                <h3>- Refreshing -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 3 days -</p>
                <Link to="/contact" className="btn">
                    ADD TO CHART
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCardComponent;