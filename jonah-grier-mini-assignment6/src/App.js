import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import Sum from './Sum';
import Die from './Die';

class App extends React.Component {

    onclickDie(action) {
        this.props.dispatch({ type: action })
    }

    render() {

        return (
            <div className="container">
                <div className="inner-container">
                    <button className="main-button" onClick={() => this.onclickDie("ROLL")}>Roll Dice</button>
                    <button className="main-button" onClick={() => this.onclickDie("CLEAR")}>Clear Dice</button>
                    <Sum sum={this.props.sum}></Sum>
                    <div className="squares">
                        {this.props.roll_array.map((item) => {
                            return (
                                <Die key={item} num={item}></Die>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

let mapDispatchToProps = function (dispatch, props) {
    return {
        dispatch: dispatch,
    }
}

let mapStateToProps = function (state, props) {
    return {
        sum: state.sum.total_sum,
        num: state.sum.recent_num,
        roll_array: state.sum.values,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)
