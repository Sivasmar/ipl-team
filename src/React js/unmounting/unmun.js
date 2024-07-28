
import { Component } from "react";

class Unmounting extends Component {
  constructor() {
    super();
    this.state = {
      childComponent: true,
    };
  }
  childHandler = () => {
    this.setState({
      childComponent: !this.state.childComponent,
    });
  };
  render() {
    return (
      <div>
        <h1>Unmounting</h1>
        {this.state.childComponent ? <Child /> : <h2>child not found</h2>}
        <button onClick={this.childHandler}>click</button>
      </div>
    );
  }
}
export default Unmounting;

export class Child extends Component {
  componentWillUnmount() {
    alert("i am removing!!!!");
  }
  render() {
    return (
      <>
        <h1>child component</h1>
      </>
    );
  }
}
