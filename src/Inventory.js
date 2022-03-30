class Inventory {
    constructor() {
        this.state = {
            clicks: 0,
            autoclickers: 0,
            money: 100.00,
            wire: 0
        }
    }

    addClicks(n, state) {
        return Object.assign(state, {
            clicks: state.clicks + 1,
            wire: state.wire - 1
        });
    }

    addAutoClickers(n, state) {
        return Object.assign(state, {
            autoclickers: state.autoclickers + 1
        });
    }

    purchaseWire(n, state) {
        return Object.assign(state, {
            wire: state.wire + 500,
            money: state.money - 5.00
        });
    }
}

export default Inventory;
