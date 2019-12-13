import React from "react"

// import TimeStamp from "./InputComponents/Timestamp.js"
import TextArea from "./inputcomponents/Textarea.js"
import NameInput from "./inputcomponents/NameInput.js"
import InputButton from "./inputcomponents/InputButton.js"



class Input extends React.Component {
  constructor() {
    super()
    this.state = {
      textInput: "",
      nameInput: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    if(event.target.id === "textArea") {
      this.setState({textInput: event.target.value})
      //console.log(this.state.textInput);
    } else if (event.target.id === "nameInput") {
      this.setState({nameInput: event.target.value})
      //console.log(this.state.nameInput);
    }

  }

  render() {
    return (
      <form
        onSubmit={(e) => this.props.handleSubmit(e)}
      >
        <div className="Input">
          <NameInput handleChange={this.handleChange}/>
          <TextArea handleChange={this.handleChange}/>
        </div>
        <InputButton />
      </form>
      )
  }
}
export default Input
