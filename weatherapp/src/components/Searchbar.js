import React from 'react'

function Searchbar(props) {
    return (
        <div className="row">
            <div className="col-md-6">
                <h1 className="title">Weather-app</h1>
            </div>
            <div className="col-md-6">
                <form className="region" onSubmit={(e) => props.changeWeather(e)}>
                    <input className="regioninput" placeholder="Enter Location" 
                    onChange={(e)=>{props.changeRegion(e)}}/>
                </form>
            </div>
        </div>
    )
}

export default Searchbar