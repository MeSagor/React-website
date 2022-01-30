import {Link, Route, Routes} from 'react-router-dom'

import CoronaUpdater from "./CoronaUpdater";
import WeatherUpdater from "./WeatherUpdater";
import ProjectsList from "./ProjectsList";


export default function Projects() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<ProjectsList/>}/>
                <Route path="/coronaUpdater" element={<CoronaUpdater/>}/>
                <Route path="/weatherUpdater" element={<WeatherUpdater/>}/>
            </Routes>
        </div>
    )
}