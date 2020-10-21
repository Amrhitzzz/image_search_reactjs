import React from "react";
import '../css/index.css';
import Clock from './Clock';
import Greetings from './Greetings';
import Search from "./Search";

const App = () => {
	return (
		<>
			<div className="maincontainer">
				<Greetings />
				<Clock />
				<Search />
			</div>
		</>
	);
}
export default App;
