import React from "react";
import Inventory from "./Inventory"

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.inventory = new Inventory();
        this.state = {
            money: 100.00,
            clicks: 0,
            wire: 500,
            autoclickers: 0
        }
    }

    handleClickerClicked = () => {
        this.makeClick();
    }

    handleAutoClickerClicked = () => {
        this.makeAutoClicker();
    }

    handlePurchaseWireClicked = () => {
        this.purchaseWire();
    }

    makeClick() {
        this.setState(this.inventory.addClicks(1, this.state));
    }

    makeAutoClicker() {
        this.setState(this.inventory.addAutoClickers(1, this.state));
    }

    purchaseWire() {
        this.setState(this.inventory.purchaseWire(1, this.state));
    }

    render() {
        return (
            <div>
                <div>clicks: {this.state.clicks}</div>
                <div>autoclickers: {this.state.autoclickers}</div>
                <div>money: {this.state.money.toFixed(2)}</div>
                <div>wire: {this.state.wire}</div>
                <button title="clicker" onClick={this.handleClickerClicked}>Make Click!</button>
                <button title="purchase-autoclicker" onClick={this.handleAutoClickerClicked}>Make Autoclicker!</button>
                <button title="purchase-wire" onClick={this.handlePurchaseWireClicked}>Purchase Wire!</button>
            </div>
        )
    }
}

export default Game;