import React from "react"

class FeedItem extends React.Component {

  render() {
    const timestampStyles = {
      fontSize: 12
    }
    return (
      <div>
        <h3>{this.props.text}</h3>
        <footer style={timestampStyles}> Timestamp: {"" + this.props.date}</footer>
      </div>
  )
  }

}

export default FeedItem
