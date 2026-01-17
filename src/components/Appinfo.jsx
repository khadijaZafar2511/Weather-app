import React from 'react'
import PropTypes from 'prop-types'

export default function Appinfo(props) {
    return (
      <>
        <div className="w-1/2 md:h-[80vh] h-1/2 ml-15 mt-4 lg:mt-0 mb-20 text-green-500 flex flex-col items-center justify-center">
          <h1 className="font-medium text-6xl flex lg:ml-10  mr-19">
            Weather<p className="text-white ">App</p>
          </h1>
          <br />
          <h1 className="font-normal text-[rgba(83,166,175,1)]  text-3xl flex">
            <p className="text-white ">using</p>react.js
          </h1>
          <img
            className="h-[20vh] w-[30vh]  ml-25 mt-3"
            src="\cloud2.png"
          ></img>
        </div>
      </>
    );
}
