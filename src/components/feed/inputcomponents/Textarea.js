import React from "react"

class TextArea extends React.Component {

  render() {
      return (
        <div className="right">
          <h3>Text Input:</h3>
          <textarea
            className="input"
            id="textArea"
            maxLength="45"
            onChange={(e) => this.props.handleChange(e)}
            />
        </div>
        )
  }
}
export default TextArea
