// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accel = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevs => ({speed: prevs.speed + 10}))
    } else {
      this.setState(prevs => ({speed: prevs.speed}))
    }
  }

  brake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevs => ({speed: prevs.speed - 10}))
    } else if (speed === 0) {
      this.setState(prevs => ({speed: prevs.speed}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg">
        <h1 className="hd">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="logo"
          alt="speedometer"
        />

        <h1 className="para">Speed is {speed}mph</h1>
        <p className="para1">Min Limit is 0mph, Max Limit is 200mph</p>

        <div className="but-back">
          <button className="butt_primary" onClick={this.accel}>
            Accelerate
          </button>
          <button className="butt_trans" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
