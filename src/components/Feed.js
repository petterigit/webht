import React from "react"

import FeedItem from "./feed/FeedItem.js"
import Input from "./feed/Input.js"
import feedData from "./feed/FeedData.js"


class Feed extends React.Component {
  constructor() {
    super()
    this.state = {
      newData: {},
      feedList: feedData
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    console.log("Update data");
    const paramData = {
      text: e.target.firstChild.value,
      id: -1,
      timestamp: "default"
    }

    e.preventDefault();

    this.setState({newData: paramData})
    this.setState(prevState => {
      const feedList = prevState.feedList.concat(prevState.newData)

      return {
        feedList,
        newData: {}
      }
    })
    }

  render() {
    const feedList = this.state.feedList.map(data => <FeedItem key={data.id} date={data.timestamp} text={data.text} />)

    return (
      <div className="Feed">
        <Input handleSubmit={this.handleSubmit} />
        {feedList}

      </div>
    )
    }
  }

export default Feed
