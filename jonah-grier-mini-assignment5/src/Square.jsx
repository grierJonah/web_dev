import React from 'react'
import './css/square.css'

export default class Square extends React.Component {

    render() {
        return (
            <div className="container">
                <div className={this.props.id} onClick={() => this.props.colorToggleFunc()} style={{ backgroundColor: this.props.color }}></div>
            </div >
        );
    }
}