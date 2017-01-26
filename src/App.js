import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import ClockList from './components/ClockList/ClockList'

const myInfo = {
  name: "Tuomas Juopperi",
  address: "Jämeräntaival 11 I 178",
  email: "tuomas.juopperi@aalto.fi",
  phone: "050-356 3546"
};

const worldClocks = [
  {
    title: "Helsinki",
    offset: 2
  },
  {
    title: "London",
    offset: 0
  },
  {
    title: "Hong Kong",
    offset: 8
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Infopage</h2>
        </div>
        <ClockList clocks={worldClocks} />
        <PersonalInfo {...myInfo}/>
      </div>
    );
  }
}

export default App;
