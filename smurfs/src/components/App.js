import React, { Component } from "react";
import SmurfList from './SmurfList';
import AddForm from "./AddForm";
import "./App.css";



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurf Village </h1>
        <AddForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
