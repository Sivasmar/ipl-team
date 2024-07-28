import { Component } from "react";
import axios from "axios";

class MountingComponent extends Component {
  constructor() {
    console.log("constructor executing");
    super();
    this.state = {
      color: "red",
      recipeList: [],
      loader: true,
      error: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps executing...", props, state);
    return { color: props.myColor };
  }

  fetchRecipe = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      // console.log(response)
      if (status === 200) {
        this.setState({
          recipeList: data.recipes,
          loader: false,
        });
      }
    } catch (err) {
      this.setState({
        error: true,
        loader: false,
      });
    }
  };

  componentDidMount() {
    console.log("componentDidMount executing..");
    this.fetchRecipe();
  }
  render() {
    console.log("render executing...");
    return (
      <>
        <h1>Mounting Component</h1>
        <h3 style={{ color: this.state.color }}>color is {this.state.color}</h3>
      </>
    );
  }
}
export default MountingComponent;