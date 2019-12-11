import React from "react"

class InputButton extends React.Component {
  render() {
    const Styles = {
      fontSize: 12,
      borderRadius: "3px",
      border: "2px solid skyblue",
      color: "skyblue",
      margin: "0.5em 1em",
      padding: "0.25em 1em",
      background: "white"
    }
    return (
        <input style={Styles} type="submit" value="Submit"/>
      )
  }
}

export default InputButton
