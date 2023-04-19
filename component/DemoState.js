import React, { Component } from 'react'

export default class DemoState extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"Ali",
            age: 20
        }
    }
    hanldChange=()=>{
        this.setState({
            name: "Ala",
            age: 19
        })
    }
  render() {
    return (
      <div>
        <hr/>
        <h2>Sử dụng dữ liệu ở trong State</h2>
        <p>Name: <b>{this.state.name}</b></p>
        <p>Age: <b>{this.state.age}</b></p>
        <button onClick={this.hanldChange}>Change State</button>
      </div>
    )
  }
}
