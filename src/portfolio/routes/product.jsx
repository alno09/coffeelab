import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import HeroImgComponentP from "../component/heroImgP";
import PricingCardComponent from "../component/pricingCard";

const ProductComponent = () => {
    return(
        <div>
            <NavbarComponent />
            <HeroImgComponentP />
            <PricingCardComponent />
            <FooterComponent /> 
        </div>
    )
}

export default ProductComponent;