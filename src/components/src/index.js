import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import landingpage from "./components/landingpage.js"
import registerServiceWorker from "./registerServiceWorker";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { BrowserRouter } from "react-router-dom";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";

ReactDOM.render( 
	<BrowserRouter >
		<landingpage/>
	    <App/>
	</BrowserRouter>,
    document.getElementById("root")
);
registerServiceWorker();