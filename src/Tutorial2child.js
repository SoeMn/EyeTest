import React, { Component } from "react";

const colors = ["red", "green", "blue", "orange", "white"];

function buttonColor(buttonColor) {
    let style = {};
    style = {
        background: buttonColor,
        width: "300px",
        border: "2px black",
        padding: "25px",
        margin: "25px"
    };
    return style;
}

function wrongText(buttonColor) {
    {
        /*gives a different color text than the input color text*/
    }
    var colorText = colors[Math.floor(Math.random() * colors.length)];
    while (colorText == buttonColor) {
        colorText = colors[Math.floor(Math.random() * colors.length)];
    }
    return colorText;
}

class Tutorial2child extends Component {
    state = {
        button1Color: "",
        button2Color: "",
        winner: ""
    };

    componentDidMount() {
        this.setState({
            button1Color: colors[Math.floor(Math.random() * colors.length)],
            button2Color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    handleClick1 = event => {
        {
            /*if button 1 is clicked*/
        }
        //event.preventDefault();
        if (this.props.winner == 1) {
            console.log("You win");
        } else {
            console.log("You lose");
        }
    };

    handleClick2 = event => {
        {
            /*if button 1 is clicked*/
        }
        //event.preventDefault();
        if (this.props.winner == 2) {
            console.log("You win");
        } else {
            console.log("You lose");
        }
    };

    render() {
        return (
            <div>
                Tutorial 2
                <div
                    id="button1"
                    style={buttonColor(this.state.button1Color)}
                    onClick={this.handleClick1}
                >
                    {this.props.winner == 1
                        ? this.state.button1Color
                        : wrongText(this.state.button1Color)}
                </div>
                <div
                    id="button2"
                    style={buttonColor(this.state.button2Color)}
                    onClick={this.handleClick2}
                >
                    {this.props.winner == 2
                        ? this.state.button2Color
                        : wrongText(this.state.button2Color)}
                </div>
            </div>
        );
    }
}

export default Tutorial2child;
