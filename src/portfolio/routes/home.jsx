import React from "react";
import NavbarComponent from "../component/navbar";
import HeroImgComponent from "../component/heroImg";
import FooterComponent from "../component/footer";

const HomeComponent = () => {
    return(
        <div>
            <NavbarComponent />
            <HeroImgComponent />
            <FooterComponent />
        </div>
    )
}

export default HomeComponent;