import React from 'react';

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

export default App;
