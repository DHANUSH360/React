import { Component } from "react";

class BindInConstructor extends Component {

  constructor() {
    super();

    this.state = {
      message: "Hello from Constructor Binding!"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      message: "Button Clicked!"
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
export default BindInConstructor;