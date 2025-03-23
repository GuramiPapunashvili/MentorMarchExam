import { useState } from "react"
import UI from "../Components/UI"
import './API.css'


const API = () => {
    //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    const [info,setInfo] = useState(null)
    const [city,setCity] = useState('')
    const api = '1d4a9c14635dec5aec826490a517209f'
    const fetchInfo = (e)=>{
        e.preventDefault()
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`)
        .then((res) => res.json())
        .then((data) => {
            setInfo(data)
        })
        .catch((error) => {
            console.log(error)
        })
        console.log(info)
    }
    return(
        <>
        <UI/>
        <div className="bigBoy">
            <div className="APIMain">
                <form onSubmit={fetchInfo}>
                    <input
                    type="text" onChange={(e) => setCity(e.target.value)}
                    />
                    <input type="submit" className="Submit"/>
                </form>
                {
                    info ? (
                        <div>
                            <h3>Info about: {info.name}</h3>
                            <h3>Temp: {info.main.temp}</h3>
                            <h3>Weather: {info.weather[0].main}</h3>
                            <h3>Country: {info.sys.country}</h3>
                        </div>) : (
                            <h1>no data</h1>
                        )
                }
            </div>
        </div>
        </>
    )
}

export default API