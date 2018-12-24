import React, { Component } from "react";
import Nav from "./components/header";
import Form from "./components/form";
import Logic from "./components/logic";
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <>
          <Nav />
          <Logic />
          <Form />
        </>
      </div>
    );
  }
}

export default App;
