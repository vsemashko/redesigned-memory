import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increase = this.increase.bind(this);
    }

    increase() {
        this.setState(state => ({ count: ++state.count }));
    }

    render() {
        return <div onClick={this.increase}><h1>Counter: {this.state.count}</h1></div>
    }
}
