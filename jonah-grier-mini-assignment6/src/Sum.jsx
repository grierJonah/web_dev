import React from 'react';

export default class Sum extends React.Component {


    render() {
        return (
            <div>
                <h1 className="sum-count">Sum: {this.props.sum}</h1>
            </div>
        );
    }


}