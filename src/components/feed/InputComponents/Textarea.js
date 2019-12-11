import React from "react"

class TextArea extends React.Component {
  constructor() {
    super()
    this.state = {
      textInput: ""
    }
  }

  render() {
      const Styles = {
        fontSize: 12,
        borderRadius: "3px",
        border: "2px solid skyblue",
        color: "skyblue",
        margin: "0.5em 1em",
        padding: "0.25em 1em",
        rows: 10
      }
      return (
          <textarea style={Styles}
            onChange={(e) => this.props.handleChange(e)}
            />
        )
  }
}
export default TextArea
