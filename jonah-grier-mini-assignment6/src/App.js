import './App.css'
import React from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import Die from './Die';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dieValueList: [1, 2, 3, 4, 5],
      sum_cube_list: [],
    }
  }

  sumDie() {
    this.setState({
      dieValueList: [...this.state.dieValueList, this.props.countFromState]
    })
  }

  render() {
    // const sum = this.state.dieValueList.reduce((a, b) => (a + b), 0)
    return (
      <div className="container" >
        <div>
          {/* <button className="rollDie" onClick={() => this.props.rollDieFunc()}>Roll Dice</button> */}
          <button className="rollDie" onClick={() => {
            this.props.rollDieFunc();
            this.props.sumDiceFunc(this.props.countFromState, this.state.sum_cube_list)
          }}>Roll Dice</button>
          <button className="clearDie">Clear Dice</button>
          <Counter num={this.props.countFromState} sumNum={this.props.sumFromState} />
          <div>
            {this.state.dieValueList.map((item) => {
              return <Die key={item} num={item}></Die>
            })}
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
    }
  }
}

let mapStateToProps = function (state, props) {
  return {
    countFromState: state.count,
    sumFromState: state.total_sum,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

