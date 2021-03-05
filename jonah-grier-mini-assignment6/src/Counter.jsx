import React from 'react';

export default class Counter extends React.Component {



    render() {
        return (
            <h1 id="sum-count">Sum: {this.props.sum}</h1>
        );
    }

}