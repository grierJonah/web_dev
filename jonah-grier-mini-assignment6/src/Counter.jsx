import React from 'react';

export default class Counter extends React.Component {


    arrayToNum() {
        let arr = this.props.sumNum;
        let sum = arr.reduce((a, b) => (a + b), 0)
        return sum
    }


    render() {
        return (
            <div>
                <h1 id="sum-count">Roll: {this.props.num} , Sum: {this.props.sumNum}</h1>
                {/* <h2 id="sum">Other Sum: {arrayToNum()}</h2> */}
            </div>
        );
    }

}