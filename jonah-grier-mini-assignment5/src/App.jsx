import React from 'react'
import './App.css';

export default class App extends React.Component {

  _getGreeting() {
    return "Hello, click on my button to add!";
  }


  render() {
    let greeting = this._getGreeting();

    return (
      <div className="simpleCalculator">
        <div>
          {greeting}
        </div>
        <div className="inputFields">
          <input type="number" />
          <input type="number" />
        </div>

        <div>
          <button>Add</button>
        </div>
      </div>

    );
  }


}


