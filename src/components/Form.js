import { format } from "path"
import React from "react"

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      number: 0,
      firstNum: 0,
      lastNum: 0,
      answer: "",
    }
  }

  handleChange = (event) => {
    const {value} = event.target
    !this.state.firstNum ? this.setState({ firstNum: value }) : this.setState({ lastNum: value })
  }

  handleClick = (event) => {
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
    const numbers = new Array(9).fill(undefined).map((val, i) => <button className="number-button">{i+1}</button>)
    return(
      <form>
        <input 
          type="number"
          name="firstNum"
          onChange={this.handleChange}
          value={this.state.number}
        />
        <section className="calc-buttons">
          <section className="num-buttons">
            { numbers }
          </section>
          <section className="math-buttons">
            <button className="math-button" onClick={this.handleClick} name="add">+</button>
            <button className="math-button" onClick={this.handleClick} name="subtract">-</button>
            <button className="math-button" onClick={this.handleClick} name="multiply">x</button>
            <button className="math-button" onClick={this.handleClick} name="divide">÷</button>
            <button className="math-button" onClick={this.handleClick} name="equal">=</button>
          </section>
        </section>
        <h1 className="answer">Answer: {this.state.answer}</h1>
      </form>
    )
  }
}

export default Form