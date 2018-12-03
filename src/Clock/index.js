import React, {Component} from 'react';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date : new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({date: new Date()})
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <p>时间: {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}