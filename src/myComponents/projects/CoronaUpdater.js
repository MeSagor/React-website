import React, {useEffect, useState} from "react"
import {CartesianGrid, AreaChart, XAxis, YAxis, Tooltip, Area} from 'recharts'

export default function CoronaUpdater() {

    // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page A', uv: 300, pv: 2000, amt: 2400}]
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",]

    const url = "https://corona.lmao.ninja/v2/historical/Bangladesh?lastdays=1300"

    const [NewCases, setNewCases] = useState()
    const [Death, setDeath] = useState()
    const [Date, setDate] = useState()
    const [data, setData] = useState([])
    // const [json, setJson] = useState([])

    const getData = async () => {
        const response = await fetch(url)
        const result = await response.json()
        // setJson(result)

        let t1 = []
        let t2 = []
        let date = []
        let Afinal = []
        let Dfinal = []

        for (let x in result.timeline.cases) {
            t1.push(result.timeline.cases[x])
            let mo = ""
            let da = ""
            let cnt = 0
            for (let i = 0; i < x.length; i++) {
                if (x[i] !== "/" && cnt < 1) mo += x[i]
                else if (x[i] !== "/" && cnt < 2) da += x[i]
                else cnt += 1
            }
            const fmo = parseInt(mo)
            const fdate = da + " " + month[(fmo - 1) % 12]
            date.push(fdate)
        }

        for (let x in result.timeline.deaths) {
            t2.push(result.timeline.deaths[x])
        }

        let s = t1[0]
        for (let i = 1; i < t1.length; i++) {
            if (t1[i] < s) break
            Afinal.push(t1[i] - s)
            // element.cases = t1[i] - s
            s = t1[i]
        }
        let ss = t2[0]
        for (let i = 1; i < t2.length; i++) {
            if (t2[i] < ss) break
            Dfinal.push(t2[i] - ss)
            // element.death = t2[i] - ss
            ss = t2[i]
        }


        const dataArray = []
        for (let i = 0; i < Afinal.length; i++) {
            const element = {date: null, cases: null, death: null}
            element.date = date[i]
            element.cases = Afinal[i]
            element.death = Dfinal[i]
            dataArray.push(element)
            // setData(prevState => [...prevState, element])
        }
        setNewCases(Afinal[Afinal.length - 1])
        setDeath(Dfinal[Dfinal.length - 1])
        setDate(date[date.length - 1])
        setData(dataArray)
    }

    useEffect(() => {
        getData()
        // console.log("in useEffect")
        // console.log(data)
    }, [])

    return (
        <div>
            <div className="final_space">
                <h1 className="subCat">Date: {Date}</h1>
            </div>
            <hr className="solid3"/>
            <div className="final_space">
                <h3 className="subCat">New Affected: {NewCases} </h3>
                <h3 className="subCat">New Death: {Death}</h3>
            </div>
            <hr className="solid"/>
            <div className="final_space2">
                <h3>Cases</h3>
            </div>
            <hr className="solid4"/>
            <div className="chart">
                <AreaChart width={900} height={400} data={data}>
                    <defs>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>

                    <Area type="monotone" dataKey="cases" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)"/>
                    <Area type="monotone" dataKey="death" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>
                    <CartesianGrid stroke="#ccc"/>
                    <XAxis dataKey="date" axisLine={false} tickLine={true} interval={70}/>
                    <YAxis axisLine={false} tickLine={false}/>
                    <Tooltip/>
                </AreaChart>
            </div>

            <div className="final_space3">
                <h3>Death</h3>
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

                    <Area type="monotone" dataKey="death" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)"/>
                    <CartesianGrid stroke="#ccc"/>
                    <XAxis dataKey="date" axisLine={false} tickLine={true} interval={70}/>
                    <YAxis axisLine={false} tickLine={false}/>
                    <Tooltip/>
                </AreaChart>
            </div>
        </div>
    )
}