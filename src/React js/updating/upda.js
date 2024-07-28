
import { Component } from "react";

class UpdatingComponent extends Component {
  constructor() {
    super();
    this.state = {
      cakeCount: 100,
    };
  }

  cakeHandler = () => {
    this.setState({
      cakeCount: this.state.cakeCount - 1,
    });
  };
  //if true update the component false stop the execution
  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState);
    return null;
  }

  componentDidMount() {
    document.title = `cake count ${this.state.cakeCount}`;
  }

  componentDidUpdate() {
    document.title = `cake count ${this.state.cakeCount}`;
  }
  render() {
    console.log("render");
    return (
      <>
        <h1>Updating Phase</h1>
        <h2>No of Cakes in shop is{this.state.cakeCount}</h2>
        <button onClick={this.cakeHandler}>Cakes</button>
      </>
    );
  }
}
export default UpdatingComponent;
