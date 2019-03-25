import React, {
  Component
} from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Travel";

class App extends Component {
  render() {
    return ( <
      div className = "App" >
      <
      header className = "App-header" >
      <
      img src = {
        logo
      }
      className = "App-logo"
      alt = "logo" / >
      <
      h1 className = "App-title" > My Travels < /h1> < /
      header > <
      Quote destination = "REYKJAVIK"
      country = "Iceland"
      image = "https://i.imgur.com/PyAbG4g.jpg"
      distance = "2 260 km" /
      >
      <
      Quote destination = "TOKYO"
      country = "Japan"
      image = "https://i.imgur.com/JY1Mug8.jpg"
      distance = "9 610 km" /
      >
      <
      /div>
    );
  }
}
export default App;