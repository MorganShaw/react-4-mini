import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import routes from './routes'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
          {routes}
      </div>
    );
  }
}

export default App;


//If you have a Nav bar or header or footer that you want to be there every time, then put the routing stuff under the Nav.

//You could just copy and paste the Switch wrapped route components from the routes.js file, but it's best to do it this way above - importing routes.js at the top. 