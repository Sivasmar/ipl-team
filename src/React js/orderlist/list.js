import { Component } from "react";
import "./odd.css";


class SquareComponent extends Component {
    state = {
      sqaureArray: [],
    }
    addSquareHandler = () => {
      const newState = [...this.state.sqaureArray,1];
      this.setState({
        sqaureArray: newState,
      });
    }
    render() {
      return (
        <>
          <h1>Square component</h1>
          <button onClick={() => this.addSquareHandler()}>Add Sqaures</button>
          <div className="flex">
  
          {this.state.sqaureArray.map(( each,index) => {
            console.log(each)
            return (
           
                 <div
                
                className={
                  (index + 1) % 2 === 0
                    ? "sqaure-card-highlight"
                    : "sqaure-card-not-highlight"
                }
            >
              {index + 1}
            </div>
          
            );
          })}
          </div>
        </>
      );
    }
  }
  
  export default SquareComponent;