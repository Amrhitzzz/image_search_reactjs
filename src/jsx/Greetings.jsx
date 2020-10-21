import React from "react";

// greetings message 
let dates = new Date();
let times = dates.getHours();
let greeting = "";
if (times >= 1 && times < 12) {
    greeting = 'Good Morning';
} else if (times >= 12 && times < 19) {
    greeting = "Good Afternooon";
} else {
    greeting = 'Good Night';
}


const Greetings = () => {
    return (
        <>
            <div className="displayGreeting">Hello there!!! {greeting}</div>
        </>
    );
}

export default Greetings;
