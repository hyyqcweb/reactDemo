import React from 'react';

const HighOrderComponent = (WrapComponent, title) => {
    return class HOC extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                username: '123'
            }
        }

        render() {
            return (
                <div>
                    <legend>{title}</legend>
                    <WrapComponent username={this.state.username}/>
                </div>
            )
        }
    }
};

export default HighOrderComponent