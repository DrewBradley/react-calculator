import { format } from "path"
import React from "react"

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      firstNum: 0,
      lastNum: 0,
      answer: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  handleClick(event) {
    event.preventDefault()
    const first = parseInt(this.state.firstNum)
    const last = parseInt(this.state.lastNum)
    let result
    const {name} = event.target
    if(name === "add") {
      result = first + last
    } else if(name === "subtract") {
      result = first - last
    } else if(name === "multiply") {
      result = first * last
    } else if(name === "divide") {
      result = first / last
    }
    this.setState(
      {answer : result}
      )
  }

  render() {
    return(
      <form>
        <label> Input 1
          <input 
            type="number"
            name="firstNum"
            onChange={this.handleChange}
            value={this.state.firstNum}
          />
        </label>
        <label> Input 2
          <input 
            type="number"
            name="lastNum"
            onChange={this.handleChange}
            value={this.state.lastNum}
          />
        </label>
        <h1 className="answer">Answer: {this.state.answer}</h1>
        <button onClick={this.handleClick} name="add">Add</button>
        <button onClick={this.handleClick} name="subtract">Subtract</button>
        <button onClick={this.handleClick} name="multiply">Multiply</button>
        <button onClick={this.handleClick} name="divide">Divide</button>
      </form>
    )
  }
}

export default Form