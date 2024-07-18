


import React, { Component } from "react";
import PropTypes from 'prop-types';
import '../image/image.css';

class Counter extends Component {
    state = {
        count: 0
    };

    incrementHandler = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    };

    decrementHandler = () => {
        this.setState(prevState => {
            if (prevState.count > 0) {
                return { count: prevState.count - 1 };
            }
            return null;
        });
    };

    resetHandler = () => {
        this.setState({ count: 0 });
    };

    render() {
        return (
            <div className="counter-container">
                <h1 className="counter-title">My Counter</h1>
                <h4 className="counter-count">{this.state.count}</h4>
                <button className="counter-button" onClick={this.incrementHandler}>+</button>
                <button className="counter-button" onClick={this.decrementHandler}>-</button>
                <button className="counter-button" onClick={this.resetHandler}>Reset</button>
            </div>
        );
    }
}

Counter.propTypes = {
    initialCount: PropTypes.number
};

Counter.defaultProps = {
    initialCount: 0
};

export default Counter;





















// import { Component } from "react";





// class  Counter extends Component{
//     state={

//         count:0
//     }
//     incrementHandler = () =>{
//         this.setState(
//            { count : this.state.count +1,}
           
        
      
//     };
//     decrementHandler = () => {
//         if (this.state.count > 0    ) {
//             this.setState({
//                 count: this.state.count - 1
//             });
//         }
//     };
    
//     resetHandler = ()=>{
//          this.setState({
//             count : 0
//          })
//     }
//     render()
//     {
//         return(
//             <>
//             <h1>My countore</h1>

//             <h4>{this.state.count}</h4>

//             <button onClick={this.incrementHandler}> + </button>
//             <button onClick={this.decrementHandler}> - </button>
//             <button  onClick={this.resetHandler}>Reset</button>
//             </>
//         )
//     }
// };

// export default Counter;
