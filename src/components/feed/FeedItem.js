import React from "react"

class FeedItem extends React.Component {

  render() {
    return (
      <div>
        <h3>{this.props.text}</h3>
        <footer> Blogged by: {"" + this.props.user}</footer>
      </div>
  )
  }

}

export default FeedItem
