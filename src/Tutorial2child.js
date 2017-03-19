import React, { Component } from "react";

const colors = ["red", "blue", "green", "orange"];

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

class Tutorial2child extends Component {
    state = {
        winner: "",
        button1Color: "",
        button2Color: ""
    };

    componentDidMount() {
        this.setState({
            button1Color: colors[Math.floor(Math.random() * colors.length)],
            button2Color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    render() {
        return (
            <div>
                Tutorial2
                <div id="button1" style={buttonColor(this.state.button1Color)}>
                    {this.props.winner == 1 ? this.state.button1Color : "black"}
                </div>
                <div id="button2" style={buttonColor(this.state.button2Color)}>
                    {this.props.winner == 2 ? this.state.button2Color : "red"}
                </div>
            </div>
        );
    }
}

export default Tutorial2child;
