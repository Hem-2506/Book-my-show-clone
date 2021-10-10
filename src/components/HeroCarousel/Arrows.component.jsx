import React from "react";

export const NextArrow = (props) => {
    // Classname
    // style
    // onclick
    return(
        <>
        <div className={props.className}
        style={{...props.style, backgroundColor: "black"}}
        onClick={props.onClick}
        />
        </>
    );
};

export const PrevArrow = (props) => {
    return (
        <>
        <div className={props.className}
        style={{...props.style, backgroundColor: "black"}}
        onClick={props.onClick} />
        </>
    );
};