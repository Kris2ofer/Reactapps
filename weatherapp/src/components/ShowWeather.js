import React from 'react'

function ShowWeather(props) {
    return (
        <div className="user-weather">
            <div className="row">
                <div className="col-md-3 weather-temp">
                    <h1>{props.temperature}<sup>o</sup>C , {props.description}</h1>
                    <h4>{props.location}</h4>
                    <p>{props.region} , {props.country}</p>
                </div>

                <div className="col-md-9">
                    <img className="mainImg" src={props.img} alt="weather-img" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 weather-info">
                    <p><b>Wind Speed</b>(km/hr)</p>
                    <h2>{props.wind_speed}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Pressure</b>(millibar)</p>
                    <h2>{props.pressure}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Precipitation</b>(mm)</p>
                    <h2>{props.precip}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Humidity</b>(%)</p>
                    <h2>{props.humidity}</h2>
                </div>

            </div>
        </div>
    )
}

export default ShowWeather
