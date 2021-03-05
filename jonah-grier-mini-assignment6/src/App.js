import './App.css'
import React from 'react';
import Counter from './Counter';



export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }



  render() {
    return (
      <div className="container">
        <div>
          <button className="rollDie" onClick={() => this.props.rollDieFunc()}>Roll Dice</button>
          <button className="clearDie">Clear Dice</button>
          <Counter />
        </div>
      </div>
    )
  }
}

