import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectorGlow, setselectorGlow] = useState("");
	
	
	const alternarColor = () => {
		if (selectorGlow === "red") {
			setselectorGlow("yellow");
		} else if (selectorGlow === "yellow") {
			setselectorGlow("green");
		} else {
		  setselectorGlow("red");
		}
	  };

	return (
		<div id="container">
		 
			<div className="bar"></div>
			   <div className="structure">
			     <div className={ "light red" + (selectorGlow === "red" ? " glow" : "")}  onClick = {() => setselectorGlow("red")}></div>
			     <div className={"light yellow"  + (selectorGlow === "yellow" ? " glow" : "")}  onClick={() => setselectorGlow("yellow")}></div>
				 <div className={"light green"  + (selectorGlow === "green" ? " glow" : "")}  onClick={() => setselectorGlow("green")}></div> 
			   </div>
			   <button className="toggle-button" onClick={alternarColor}> Alternar Color</button>
       
		
	    </div>
	);
};

export default Home;
