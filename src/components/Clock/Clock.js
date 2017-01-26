import React, { Component } from 'react';
import moment from 'moment';
import './Clock.css';

const time = (offset) => moment.utc().add(offset, 'hours').format("HH:mm:ss DD.MM.YYYY");

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: time(props.offset)
    }
  }
  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick()  {
    this.setState({
      time: time(this.props.offset)
    })
  }
  render() {
    return (
      <li className="clock">
        <h3>{this.props.title}</h3>
        <span>{this.state.time}</span>
      </li>
    );
  }
}

export default Clock;
