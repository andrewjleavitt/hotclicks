import React from "react";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0, money: 100.00}
        this.handleClickerClicked = this.handleClickerClicked.bind(this);
    }

    handleClickerClicked() {
        this.makeClick();
    }

    makeClick() {
        this.setState((state, props) => {
            return {
                clicks: this.state.clicks += 1,
                money: this.state.money -= 1.00
            }
        });
    }

    render() {
        return (
            <div>
                <div>clicks: {this.state.clicks}</div>
                <div>money: {this.state.money.toFixed(2)}</div>
                <button title="clicker" onClick={this.handleClickerClicked}>Make Click!</button>
            </div>
        )
    }
}

export default Game;