import React from "react"

class TimeStamp extends React.Component {
  render() {
    const date = new Date()

    const timestamp = date.getHours() +
                      ":" +
                      date.getMinutes() +
                      ":" +
                      date.getSeconds();

    const Styles = {
      fontSize: 12,
    }
    return (
      <footer style={Styles}>
        Timestamp: {"" + timestamp}
      </footer>
      )
  }
}
export default TimeStamp
