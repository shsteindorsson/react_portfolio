import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Header from "./Header"
import Footer from "./Footer"

const App = () => {
  return (
    <div>
      <Header />
      <Hello />
      <Footer />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("app"))