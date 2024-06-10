import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div id="app">
		 
			<div className="Palito"></div>
			   <div className="Contenedor">
			     <div className="luz roja"></div>
			     <div className="luz amarilla"></div>
				 <div className="luz verde"></div> 
			   </div>
			
		 
	    </div>
	);
};

export default Home;
