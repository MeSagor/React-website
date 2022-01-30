import React from "react";


export default function ProjectItem(props) {
    return (
        <div className="card">
            <div className="serial">
                <h2>{props.Item.Title}</h2>
                <h2>{props.Item.serial}</h2>
            </div>
            <h5>{props.Item.Date}</h5>
            <p>{props.Item.Desc}</p>
        </div>
    )
}