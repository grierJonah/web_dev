import React from 'react'

export default class SingleSquare extends React.Component {

    // pass in this.props.count 
    render() {
        return (
            <div><h1>Counter: {this.props.count}</h1></div>
        );
    }



}