import './App.css'
import React from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import Die from './Die';
// import DiceSumReducer from './DiceSumReducer';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dieValueList: [1, 2, 3, 4, 5],
      sum_cube_list: [],
      cubes_list: [],
    }
  }

  getIndexNum(index) {
    // return this.props.dieFromState[index];
    let ltt = Object.values(this.props.dieFromState);
    let new_num = ltt[ltt.length - 1];
    return new_num;
  }

  render() {

    let dice_num = this.getIndexNum();
    return (
      <div className="container" >
        <div className="inner-container">
          {/* <button className="rollDie" onClick={() => this.props.rollDieFunc()}>Roll Dice</button> */}
          <button className="rollDie" onClick={() => {
            this.props.rollDieFunc();
            this.props.sumDiceFunc(this.props.countFromState, this.state.sum_cube_list);
            this.props.addDieFunc(this.props.countFromState, this.state.cubes_list);
          }}>Roll Dice</button>
          <button className="clearDie">Clear Dice</button>
          <Counter num={this.props.countFromState} sumNum={this.props.sumFromState} />
          <div className="squares">
            {



              Object.keys(this.props.dieFromState).map(function (key, index) {
                return <Die key={key} num={dice_num} />
              })}


            {/* {this.state.dieValueList.map((item) => {
              return <Die key={item} num={item}></Die>
            })} */}

            {/* {this.props.dieFromState.map((item) => {
              return <Die key={item} num={1}></Die>
            })} */}
          </div>
        </div>
      </div >
    )
  }
}

let mapDispatchToProps = function (dispatch, props) {

  return {
    rollDieFunc: () => {
      dispatch({ type: "ROLL" })
    },
    sumDiceFunc: (num, list) => {
      dispatch({ type: "SUM", value: num, global_list: list });
    },
    addDieFunc: (num, list) => {
      dispatch({ type: "ADD", value: num, die_list: list });
    }
  }
}

let mapStateToProps = function (state, props) {
  return {
    countFromState: state.count,
    sumFromState: state.total_sum,
    dieFromState: state.dice,         // List of die numbers
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

