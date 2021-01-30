import React from "react"
import Header from "./Header"
import Form from "./Form"
import Footer from "./Footer"

class App extends React.Component {
  render(){
    return(
      <div className="app">
        <Header />
        <Form />
        <Footer />
      </div>
    )
  }
}

export default App