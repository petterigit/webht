import React from "react"


import TimeStamp from "./InputComponents/Timestamp.js"
import TextArea from "./InputComponents/Textarea.js"
import InputButton from "./InputComponents/InputButton.js"



class Input extends React.Component {
  constructor() {
    super()
    this.state = {
      textInput: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({textInput: event.target.value})
  }

  render() {
    return (
      <form
        onSubmit={(e) => this.props.handleSubmit(e)}
        >
        <TextArea handleChange={this.handleChange}/>
        <TimeStamp />
        <InputButton />
      </form>
      )
  }
}
export default Input
