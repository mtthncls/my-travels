import React, {
  Component
} from "react";
import logo from "./logo.svg";
import "./App.css";

import Travels from "./Travels";

class App extends Component {
  render() {
    return (<div className="App" >
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title" > My Travels </h1>
      </header>
      {/*<Travel destination="REYKJAVIK" country="Iceland" image="https://i.imgur.com/PyAbG4g.jpg" distance="2 260 km" />
      <Travel destination="TOKYO" country="Japan" image="https://i.imgur.com/JY1Mug8.jpg" distance="9 610 km" />*/}
      <Travels />
    </div>);

  }
}
export default App;