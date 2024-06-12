import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectorBrillo, setselectorBrillo] = useState("");
	
	
	const alternarColor = () => {
		if (selectorBrillo === "roja") {
		  setselectorBrillo("amarilla");
		} else if (selectorBrillo === "amarilla") {
		  setselectorBrillo("verde");
		} else {
		  setselectorBrillo("roja");
		}
	  };

	return (
		<div id="app">
		 
			<div className="Palito"></div>
			   <div className="Contenedor">
			     <div className={ "luz roja" + (selectorBrillo === "roja" ? " brillo" : "")}  onClick = {() => setselectorBrillo("roja")}></div>
			     <div className={"luz amarilla"  + (selectorBrillo === "amarilla" ? " brillo" : "")}  onClick={() => setselectorBrillo("amarilla")}></div>
				 <div className={"luz verde"  + (selectorBrillo === "verde" ? " brillo" : "")}  onClick={() => setselectorBrillo("verde")}></div> 
			   </div>
			   <button className="alternar-boton" onClick={alternarColor}> Alternar Color</button>
       
		
	    </div>
	);
};

export default Home;
