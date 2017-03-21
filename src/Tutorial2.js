import React, { Component } from "react";
import Tutorial2child from "./Tutorial2child.js";

class Tutorial2 extends Component {
    render() {
        var winnerRand = Math.random();
        {
            /*generates random number used to determine the winner*/
        }
        var winner;
        {
            /*stores winner. Either button 1 or button 2*/
        }
        if (winnerRand > 0.5) {
            winner = 1;
        } else {
            winner = 2;
        }
        return (
            <div>
                <Tutorial2child winner={winner} />
                {/*calls tutorial 2 child and unputs */}
            </div>
        );
    }
}
export default Tutorial2;
