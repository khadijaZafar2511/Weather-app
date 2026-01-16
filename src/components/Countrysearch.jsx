import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from "react";

export default function Countrysearch(props) {
    const [q, setq] = useState(null);
  const [weather, setWeather] = useState(null);
  const [value, setValue] = useState(null);
  const [input, setInput] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlerinput = (e) => { 
    setValue(e.target.value);
}
  const handlerclickbtn = (e) => {
    console.log("cliked");
    setInput(value);
  }
  const handlerkeydown = (e) => {
    if (e.key === "Enter") {
      setInput(value);
      console.log(input);   
      
    }
  }
     const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
     console.log(import.meta.env.VITE_WEATHER_API_KEY);
  useEffect(() => {
   
    async function fetchweather() {
  
       let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input ? input : "Pakistan"}&aqi=yes`;
       setLoading(true);
         let value1 = await fetch(url);
         const data = await value1.json();
         setWeather(data);
     };
     fetchweather().then(()=>{
       setLoading(false);
     });
     
   }, [input,apiKey]);
   
  return (
    <>
      <div className=" flex flex-wrap justify-center lg:w-2/7 w-4/5 h-[80vh]  bg-gradient-to-b from-[rgb(103,241,167)] to-[rgba(83,166,175,1)]  border rounded-lg ">
        <input
          onInput={handlerinput}
          onKeyDown={handlerkeydown}
          type="search"
          placeholder="  Search here..."
          className="h-[8vh] lg:w-[40vh] w-4/5 bg-white mt-3 border border-gray-300 rounded-full active: outline-none"
        ></input>
        <button
          onClick={handlerclickbtn}
          className="h-[7vh] w-[7vh] mt-4 ml-1  bg-gray-300 border rounded-full border-none bg-white flex items-center justify-center"
        >
          <img
            className=" h-[4vh] w-[4vh] border border-none rounded-full object-fit object-cover "
            src="/SEARCH.png"
          ></img>
        </button>
        <div className=" mt-10 w-[60vh] h-[70vh] flex flex-col items-center">
          <div className="w-[5vh] h-[5vh]">
            {loading && (
              <img
                className=" w-[5vh] h-[5vh]"
                src="/animated-gif.gif"
              ></img>
            )}
          </div>

          <img
            className="h-[20vh] w-[25vh] border border-none "
            src={
              weather ? weather.current.condition.icon : "/cloud2.png"
            }
          ></img>
          <h1 className="text-white font-normal text-7xl">
            {weather ? weather.current.temp_c : ""}℃
          </h1>
          <h1 className="text-white font-normal text-3xl">
            {weather ? weather.location.name : ""}
          </h1>
          <div className="h-[20vh] w-full flex">
            <div className="h-[20vh] w-1/2  mt-2 text-2xl text-white flex justify-center items-center ">
              <img
                className="h-[3vh] w-[3vh] mr-2"
                src="/humidity.png"
              ></img>
              <div>
                <p>{weather ? weather.current.humidity : ""}%</p>
                <p className="text-sm">humiditity</p>
              </div>
            </div>
            <div className="h-[20vh] w-1/2  mt-2 text-xl text-white flex justify-center items-center ">
              <img className="h-[3vh] w-[3vh] mr-2" src="\ws.png"></img>
              <div>
                <p>{weather ? weather.current.wind_kph : ""} km/h</p>
                <p className="text-sm">wind speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
