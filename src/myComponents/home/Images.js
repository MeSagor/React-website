import React from "react";
import shape from "./images/shape.png";
import picture from "./images/mr_bean.png";

export default function Images() {
    return (
        <div className="images">
            <img src={shape} className="shape" alt="shape"/>
            <img src={picture} className="girl" alt="shape"/>
        </div>
    )
}