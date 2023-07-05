//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let Counter = (props) =>{
    return (
            <div className="container mt-4 rounded">
                <div className="row">
                    <div className="col rounded">
                    <i className="fas fa-stopwatch"></i>
                    </div>
                    <div className="col rounded">0</div>
                    <div className="col rounded">0</div>
                    <div className="col rounded">{props.fourthDigit %10}</div>
                    <div className="col rounded">{props.thirdDigit %10}</div>
                    <div className="col rounded">{props.secondDigit %10}</div>
                    <div className="col rounded">{props.firstDigit %10}</div>
                </div>
            </div>
    )

}

// defining props
Counter.propTypes ={
    firstDigit: propTypes.number,
    secondDigit: propTypes.number,
    thirdDigit: propTypes.number,
    fourthDigit: propTypes.number,
}


// timer setting
let timer = 0;

setInterval( function (){
    let fourth = Math.floor(timer/1000);
    let third = Math.floor(timer/100);
    let second = Math.floor(timer/10);
    let first = Math.floor(timer/1);
    timer ++,

    //render your react application
    ReactDOM.render(<Counter firstDigit={first} secondDigit={second} thirdDigit={third} fourthDigit={fourth} />, document.querySelector("#app"));
}, 1000)


