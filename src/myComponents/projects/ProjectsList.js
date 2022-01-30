import React, {useState} from "react";
import {Link} from "react-router-dom";
import ProjectItem from "./ProjectItem";


export default function ProjectsList() {

    const [ProjectDetails] = useState([
        {
            serial: 2,
            address: "coronaUpdater",
            Date: "27 Jan, 2021",
            Title: "Corona Information BD",
            Desc: "A Simple Corona updater That Shows Graphical data representation of recent cases..."
        },
        {
            serial: 1,
            address: "weatherUpdater",
            Date: "21 Nov, 2020",
            Title: "Weather Updater",
            Desc: "A simple weather updater That Shows previous 24 hours weather report..."
        },
    ])

    return (
        <div>
            <ul>
                <li>
                    {ProjectDetails.map((Item) => {
                        return (
                            <Link to={Item.address} className="linkStyle"><ProjectItem Item={Item}
                                                                                       key={Item.serial}/></Link>)
                    })}
                </li>
            </ul>
        </div>
    )
}