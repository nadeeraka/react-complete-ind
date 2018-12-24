import React, { Component } from "react";

const Contax = React.createContext();

export class Provider extends Component {
  render() {
    state = {
      options: ["one", "two", "three"],
      errors: []
    };
    return (
      <Contax.Provider value={this.state}>
        {this.props.children}
      </Contax.Provider>
    );
  }
}
export const Consumer = Contax.Consumer;
