import React from "react";
import NavbarComponent from "./routing/navbar";
import HomeComponent from "./routing/home";

class Komponen extends React.Component {
    render() {
        return(
            <div>
                <NavbarComponent />
                <HomeComponent />
            </div>
        )
    }
}

export default Komponen;