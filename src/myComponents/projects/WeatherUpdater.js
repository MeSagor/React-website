import React, {useEffect, useState} from "react"
import {CartesianGrid, AreaChart, XAxis, YAxis, Tooltip, Area} from 'recharts'

export default function WeatherUpdater() {
    const url = "https://api.openweathermap.org/data/2.5/onecall?lat=24.557663&lon=89.502233&units=metric&exclude=minutely,daily,alerts&appid=d12df384e504558e0a7db7841f96679b"

    const [currentTem, setCurrentTem] = useState()
    const [sunrise, setSunrise] = useState()
    const [sunset, setSunset] = useState()
    const [data, setData] = useState([])
    // const [json, setJson] = useState([])

    // const temperature = []
    // const time = []


    const getData = async () => {
        const response = await fetch(url)
        const jsonDoc = await response.json()
        // setJson(jsonDoc)

        const hourly = jsonDoc.hourly

        const dataClone = []
        hourly.forEach(function (item) {
            const element = {temp: null, time: null}
            element.temp = item.temp

            // temperature.push(item.temp)

            const date = new Date((item.dt) * 1000)
            const hour = date.getHours()

            if (hour < 12) {
                let amhour = hour
                if (amhour === 0) amhour = 12
                let str = amhour.toString()
                element.time = str.concat("AM")
                // time.push(final)
            } else {
                let pmhour = hour % 12
                if (pmhour === 0) pmhour = 12
                let str = pmhour.toString()
                element.time = str.concat("PM")
                // time.push(final)
            }
            dataClone.push(element)
            // setData(prevState => [...prevState, element])
        })
        setData(dataClone)
        setCurrentTem(jsonDoc.current.temp)

        const sunrise = jsonDoc.current.sunrise
        const sunset = jsonDoc.current.sunset

        const sunRise = new Date(sunrise * 1000)
        const Rhours = sunRise.getHours()
        const Rminutes = "0" + sunRise.getMinutes()
        const Rtime = Rhours + ':' + Rminutes.substr(-2)

        const sunSet = new Date(sunset * 1000)
        const Shours = (sunSet.getHours()) % 12
        const Sminutes = sunSet.getMinutes()
        const Stime = Shours + ':' + Sminutes

        setSunrise(Rtime)
        setSunset(Stime)

    }

    useEffect(() => {
        getData()
        // console.log("in useEffect")
    }, [])

    return (
        <div>
            <div className="final_space">
                <h3>Current Temperature: {currentTem} °C</h3>
                <h3>Sun Rise: {sunrise} AM</h3>
                <h3>Sun Set: {sunset} PM</h3>
            </div>
            <hr className="solid"/>
            <div className="final_space2">
                <h3>Weather</h3>
            </div>
            <hr className="solid4"/>
            <div className="chart">
                <AreaChart width={900} height={400} data={data}>
                    <defs>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>

                    <Area type="monotone" dataKey="temp" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)"/>
                    <CartesianGrid stroke="#ccc"/>
                    <XAxis dataKey="time" axisLine={false} tickLine={true} interval={6}/>
                    <YAxis axisLine={false} tickLine={false} tickFormatter={(number) => `${number}°C`}/>
                    <Tooltip/>
                </AreaChart>
            </div>
        </div>
    )
}