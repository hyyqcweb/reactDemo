import React from 'react';
import HighOrderComponent from '../index';


class Demo extends React.Component {
    render() {
        return (
            <div>
                <h2>Hi</h2>
                <h2>晓不晓得哪里好耍{this.props.username}</h2>
            </div>
        )
    }
}

const HighOrderSecond = HighOrderComponent(Demo, 'two');

export default HighOrderSecond