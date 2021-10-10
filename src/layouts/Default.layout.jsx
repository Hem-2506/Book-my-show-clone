import React from "react";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";

// Components
import Navbar from "../components/Navbar/Navbarcomponent";


const DefaultLayout = (props) => {
    return (
        <>
           <Navbar />
           <HeroCarousel />
            {props.children}
        </>
    );
};

export default DefaultLayout;