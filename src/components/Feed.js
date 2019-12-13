import React from "react"

import FeedItem from "./feed/FeedItem.js"
import Input from "./feed/Input.js"
import feedData from "./feed/FeedData.js"


class Feed extends React.Component {
  constructor() {
    super()
    this.state = {
      newData: {},
      feedList: feedData,
      id: 5
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    console.log("Update data");
    console.log(e.target);
    //console.log(e.target.querySelector("#textArea").value);
    //console.log(e.target.querySelector("#nameInput").value);

    let textInput = e.target.querySelector("#textArea").value;
    let nameInput = e.target.querySelector("#nameInput").value;

    const paramData = {
      text: textInput,
      id: this.state.id,
      user: nameInput
    }

    e.preventDefault();

    this.setState({newData: paramData})
    this.setState(prevState => {
      const feedList = prevState.feedList.concat(prevState.newData)

      return {
        feedList,
        newData: {},
        id: prevState.id + 1
      }
    })
    }

  render() {
    const feedList = this.state.feedList.map(data => <FeedItem key={data.id} user={data.user} text={data.text} />)

    return (
      <div className="Feed">
        <Input handleSubmit={this.handleSubmit} />
        {feedList}

      </div>
    )
    }
  }

export default Feed
