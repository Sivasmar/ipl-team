
import axios from "axios";
import { Component } from "react";
import { Image } from "../image/image";


class CustomTable extends Component {
  state = {
    tableDate: [],
    loader: true,
    error: false,
  };

  tableInfo = async () => {
    const { status, data } = await axios.get("https://dummyjson.com/recipes");
    try {
      if (status === 200) {
        this.setState({
          tableDate: data.recipes,
          loader: false,
        });
      }
    } catch (err) {
      this.setState({
        loader: false,
        error: true,
      });
    }
  };
  componentDidMount() {
    this.tableInfo();
  }

  render() {
    return (
      <>
        <h2>Table</h2>
        {this.state.loader ? (
          <h2>please wait</h2>
        ) : (
          <>
            <table className="table">
              <tbody>
                {this.state.tableDate.map((each) => {
                  return (
                    <>
                      <tr>
                        <th scope="row">{each.id}</th>
                        <td>{each.name}</td>
                        <td>{each.mealType}</td>
                        <td>{each.cuisine}</td>
                        <td><Image source={each.image} width={100}/></td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </>
    );
  }
}
export default CustomTable;
