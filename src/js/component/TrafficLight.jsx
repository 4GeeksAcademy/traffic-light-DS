import React, { useState } from "react";

const TrafficLight = () => {

  const [ color, setColor ] = useState("red");

  return ( 
    <>
      <div className="stick"></div>

      <div className="traffic-light">

        {/* Red Light div */}
        <div 
        onClick={() => setColor("red")}
        className={"red-light" + (color === "red" ? "-glow" : "")}
        ></div>

        {/* Yellow light div */}
        <div 
        onClick={() => setColor("yellow")}
        className={"yellow-light" + (color === "yellow" ? "-glow" : "")}
        ></div>

        {/* Green light div */}
        <div 
        onClick={() => setColor("green")}
        className={"green-light" + (color === "green" ? "-glow" : "")}
        ></div>

      </div>
    </>
  );
}

export default TrafficLight;