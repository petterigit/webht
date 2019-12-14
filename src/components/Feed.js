import React from "react"

import FeedItem from "./feed/FeedItem.js"
import Input from "./feed/Input.js"


class Feed extends React.Component {
  constructor() {
    super()
    this.state = {
      newData: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit");
    let textInput = e.target.querySelector("#textArea").value;
    let nameInput = e.target.querySelector("#nameInput").value;
    this.props.putDataToDB(nameInput, textInput);
    }

  render() {
    const feedList = this.props.data.map(data =>
      <FeedItem
        key={data.id}
        user={data.user}
        text={data.text}
        />)

    return (
      <div className="Feed">
        <Input handleSubmit={this.handleSubmit} />
        {feedList}
      </div>
    )}
  }

export default Feed
