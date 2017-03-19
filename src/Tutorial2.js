import React, { Component } from "react";
import Tutorial2child from "./Tutorial2child.js";

class Tutorial2 extends Component {
    render() {
        var winnerRand = Math.random();
        var winner;
        if (winnerRand > 0.5) {
            winner = 1;
        } else {
            winner = 2;
        }
        return (
            <div>
                <Tutorial2child winner={winner} />
            </div>
        );
    }
}
export default Tutorial2;
