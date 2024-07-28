import { Component } from "react";
import Customcard from "../card/card";
import axios from "axios";

class FetchData extends Component {
  state = {
    products: [],
    loader: true,
    error: false,
  };
  //   fetchProducts = async () => {
  //     try {
  //       const respone = await fetch("https://fakestoreapi.com/products");
  //       const finalResponse = await respone.json();
  //       this.setState({
  //         products: finalResponse,
  //         loader: false,
  //       });
  //       console.log(finalResponse);
  //     } catch {
  //       this.setState({
  //         error: true,
  //       });
  //     } finally {
  //       this.setState({
  //         loader: false,
  //       });
  //     }
  //   };

  fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response.status === 200) {
        this.setState({
          products: response.data,
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

  render() {
    return (
      <>
        <button onClick={this.fetchProducts}>fetch data</button>
        {this.state.loader ? (
          <h2>please wait</h2>
        ) : (
          <div className="flex">
            {this.state.products.map((each) => {
              return (
                <div key={each.id}>
                  <Customcard data={each} />
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}
export default FetchData;