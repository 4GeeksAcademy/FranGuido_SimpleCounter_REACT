//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from 'prop-types';



// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

// counter component

function Counter (props) {
    return (
        <div className="container mt-4 rounded">
            <div className="row">
                <div className="col rounded">
                    <i className="fas fa-stopwatch"></i>
                </div>
                <div className="col rounded">{props.sixthDigit % 10}</div>
                <div className="col rounded">{props.fifthDigit % 10}</div>
                <div className="col rounded">{props.fourthDigit % 10}</div>
                <div className="col rounded">{props.thirdDigit % 10}</div>
                <div className="col rounded">{props.secondDigit % 10}</div>
                <div className="col rounded">{props.firstDigit % 10}</div>
            </div>  
            <div>{counterMessage}</div>       
        </div>
    )

}


// defining props
Counter.propTypes = {
    firstDigit: propTypes.number,
    secondDigit: propTypes.number,
    thirdDigit: propTypes.number,
    fourthDigit: propTypes.number,
    fifthDigit: propTypes.number,
    sixthDigit: propTypes.number,
}

const myTimeout = setTimeout(counterMessage, 7000);

function counterMessage () {
  alert("IT'S BEEN 5 SECONDS.")
}

function myStopFunction() {
  clearTimeout(myTimeout);
}


// timer setting
let timer = 0;

setInterval(function () {
    let sixth = Math.floor(timer / 100000);
    let fifth = Math.floor(timer / 10000);
    let fourth = Math.floor(timer / 1000);
    let third = Math.floor(timer / 100);
    let second = Math.floor(timer / 10);
    let first = Math.floor(timer / 1);
    timer++,

        //render your react application
        ReactDOM.render(<Counter firstDigit={first} secondDigit={second} thirdDigit={third} fourthDigit={fourth} fifthDigit={fifth} sixthDigit={sixth} />, document.querySelector("#app"));
}, 1000)



