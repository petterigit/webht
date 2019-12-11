import React from 'react';
import './App.css';

import Feed from "./components/Feed.js"

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <Feed />
      </div>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      <Feed />
    </div>
  );
}
*/

export default App;
