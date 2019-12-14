import React from 'react';
import axios from 'axios';

import Feed from "./components/Feed.js"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      id: 0,
      user: "",
      text: "",
      intervalIsSet: false,
      idToDelete: null,
      idToUpdate: null,
      objectToUpdate: null,
    };

    /* Bind DB functions so we can pass them to and use them with children */

    this.getDataFromDB = this.getDataFromDB.bind(this)
    this.putDataToDB = this.putDataToDB.bind(this)
    this.deleteFromDB = this.deleteFromDB.bind(this)

  }

  /* Two react lifecycle functions to initialize and keep up with database */
  componentDidMount() {
    this.getDataFromDB();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDB, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  /* Database access methods:
        GET POST DELETE*/
   getDataFromDB = () => {
     fetch('http://localhost:3001/api/getData')
       .then((data) => data.json())
       .then((res) => this.setState({ data: res.data }));
   };
   putDataToDB = (user, text) => {
     let currentIds = this.state.data.map((data) => data.id);
     let idToBeAdded = 0;
     while (currentIds.includes(idToBeAdded)) {
       ++idToBeAdded;
     }
     console.log("putDataToDB: " + idToBeAdded + " " + user + " " + text)
     axios.post('http://localhost:3001/api/putData', {
       id: idToBeAdded,
       user: user,
       text: text
     });
   };
   deleteFromDB = (idTodelete) => {
     parseInt(idTodelete);
     let objIdToDelete = null;
     this.state.data.forEach((dat) => {
       if (dat.id === idTodelete) {
         objIdToDelete = dat._id;
       }
     });
     axios.delete('http://localhost:3001/api/deleteData', {
       data: {
         id: objIdToDelete,
       },
     });
   };


   /* Render UI */
  render() {
    return (
      <div className="App">
        <Feed
          getDataFromDb={this.getDataFromDB}
          putDataToDB={this.putDataToDB}
          deleteFromDB={this.deleteFromDB}
          data={this.state.data}
          />
      </div>
    );
  }
}
export default App;
