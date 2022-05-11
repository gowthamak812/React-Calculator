import { Component } from "react";

class SuperClock extends Component {

    constructor(props) {
      super(props);
      this.state = {name: "Alireza", date: new Date().toLocaleTimeString() , girl: "Pavi"};
    }
  
    render() {
      return (
        <div>
          <h1>clock name={this.state.name} date={this.state.date}</h1>
        </div>
      );
    }
  }
  class Clock extends SuperClock{
      render() {
          return(
              <>
              <SuperClock  />
              <h2>Hello {this.props.pen} {this.state.girl} {this.props.age}</h2>
              </>
          );
      }
  }
  export default Clock;