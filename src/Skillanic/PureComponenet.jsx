import React, { Component } from 'react'
import Pone from './Pone'

export default class PureComponenet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  incHandler = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div className='container text-center my-5'>
        <h2>Pure Componenet</h2>
        <h2>Count:{this.state.count}</h2>
        <button onClick={this.incHandler} className='btn btn-success'>Click</button>
        <Pone />
      </div>
    )
  }
}
