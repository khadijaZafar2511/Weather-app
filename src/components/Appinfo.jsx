import React from 'react'
import PropTypes from 'prop-types'

export default function Appinfo(props) {
    return (
      <>
        <div className="w-1/2 h-[80vh] ml-15 mb-20 text-green-500 flex flex-col justify-center">
          <h1 className="font-medium text-6xl flex ml-10 ">
            Weather<p className="text-white ">App</p>
          </h1>
          <br />
          <h1 className="font-normal text-[rgba(83,166,175,1)]  text-3xl flex">
            <p className="text-white ">using</p>react.js
          </h1>
          <img
            className="h-[20vh] w-[30vh]  ml-25 mt-2"
            src="\cloud2.png"
          ></img>
        </div>
      </>
    );
}
