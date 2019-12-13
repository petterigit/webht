import React from "react"

class NameInput extends React.Component {
  render() {
      return (
          <div className="left">
            <h3>Username: </h3>
          <input
            id="nameInput"
            className="input"
            maxLength="22"
            onChange={(e) => this.props.handleChange(e)}
            />
        </div>
        )
  }
}
export default NameInput
