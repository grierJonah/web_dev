import { ReactComponent } from "*.svg";

import React from 'react';


export default class Die extends React.Component {

    render() {
        return (
            <div className="dice">{this.props.num}</div>
        );
    }

}